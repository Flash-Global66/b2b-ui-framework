#!/bin/bash

# Generar archivo con versiones publicadas en el registro npm
echo "Generando archivo registry_versions.txt con versiones publicadas..."
rm -f registry_versions.txt

# Función para convertir nombres de camelCase a kebab-case
to_kebab() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

# Obtener versiones publicadas y guardarlas en registry_versions.txt
for dir in components/*; do
  if [ -f "$dir/package.json" ]; then
    component=$(basename "$dir")
    component_kebab=$(to_kebab "$component")
    pkg="@flash-global66/b2b-ui-${component_kebab}"
    
    # Obtener la versión publicada en el registry
    version_registry=$(npm view "$pkg" version --registry=https://npm.pkg.github.com 2>/dev/null)
    if [ -z "$version_registry" ]; then
      version_registry="N/A"
    fi

    # Escribir la versión en registry_versions.txt
    echo "${pkg}:${version_registry}" >> registry_versions.txt
  fi
done

echo "Archivo registry_versions.txt generado con éxito."

# Preguntar si se deben crear tags Git
read -p "¿Deseas crear tags Git para los componentes sincronizados? (s/n): " create_tags

# Actualizar los package.json con las versiones del registro
echo "Sincronizando versiones de package.json con las publicadas..."

for dir in components/*; do
  if [ -f "$dir/package.json" ]; then
    component=$(basename "$dir")
    component_kebab=$(to_kebab "$component")
    pkg="@flash-global66/b2b-ui-${component_kebab}"
    
    # Obtener la versión publicada desde el archivo generado
    version_registry=$(grep "^$pkg:" registry_versions.txt | cut -d':' -f2 | tr -d '[:space:]')
    if [ "$version_registry" == "N/A" ]; then
      echo "⚠️ No hay versión publicada para $pkg, omitiendo."
      continue
    fi
    
    # Obtener la versión local actual
    version_local=$(node -p "require('./$dir/package.json').version" 2>/dev/null | tr -d '[:space:]')
    
    echo "$pkg:"
    echo "  Local: $version_local vs Registry: $version_registry"
    
    if [[ "$version_local" == "$version_registry" ]]; then
      echo "  ✅ Ya sincronizado, no se requiere actualización."
    else
      # Usar node para actualizar el package.json de manera más segura
      node -e "
        const fs = require('fs');
        const path = require('path');
        const packageFile = path.join('$dir', 'package.json');
        const pkg = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
        pkg.version = '$version_registry';
        fs.writeFileSync(packageFile, JSON.stringify(pkg, null, 2) + '\n');
      "
      
      # Verificar si la actualización fue exitosa
      if [ $? -eq 0 ]; then
        echo "  🔄 Actualizado package.json de $version_local a $version_registry"
      else
        echo "  ❌ Error al actualizar package.json"
        continue
      fi
      
      # Crear tag Git si se solicitó
      if [[ "$create_tags" == "s" || "$create_tags" == "S" ]]; then
        tag_name="${component_kebab}-v${version_registry}"
        git tag -a "$tag_name" -m "Sincronizando $pkg a versión $version_registry"
        echo "  🏷️ Creado tag Git: $tag_name"
      fi
    fi
    
    echo ""
  fi
done

echo "Proceso de sincronización completado."

if [[ "$create_tags" == "s" || "$create_tags" == "S" ]]; then
  echo "📌 Recuerda ejecutar 'git push --tags' para subir los tags al repositorio remoto."
fi

echo "💡 Ahora puedes ejecutar 'git add . && git commit -m \"chore: sincronizar versiones con registry\"' para guardar los cambios."
echo "💡 Luego ejecuta 'yarn compare-versions' para verificar que todo esté sincronizado."

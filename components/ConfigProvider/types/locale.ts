export type TypeTranslatePair = {
  [key: string]: string | string[] | TypeTranslatePair
}

export type TypeLanguage = {
  name: string
  el: TypeTranslatePair
}
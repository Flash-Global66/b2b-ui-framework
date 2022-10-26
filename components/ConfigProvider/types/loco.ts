export type TypeTranslatePair = {
  [key: string]: string | string[] | TypeTranslatePair
}

export type TLanguage = {
  name: string
  el: TypeTranslatePair
}
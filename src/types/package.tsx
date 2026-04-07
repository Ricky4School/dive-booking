export interface PackageDetail
{
  languageId: number
  title: string
  includes: string[]
  excludes: string[]
}

export interface PackageItem
{
  id: number
  price: number
  packagePax: number
  freePax: number
  thumbnail: string
  details: PackageDetail[]
}

export interface PackageResponse
{
  packageList: PackageItem[]
  scubaEquipment: {
    id: number
    name: string
    price: number
  }[]
}
export interface Wedding {
  id: number
  date: string

  message: {
    intro: string
    invitation: string
  }
  galleryImages: string[]
  attendCount: number

  groom: Person & { parents: Person[] }
  bride: Person & { parents: Person[] }
  location: Location
}

export interface Location {
  lat: number
  lng: number
  name: string
  address: string
  link: string
  waytocome: {
    metro: string[]
    bus: string[]
  }
}

export interface Account {
  bankName: String
  accountNumber: String
}

export interface Person {
  name: string
  phoneNumber: string
  account: Account
}

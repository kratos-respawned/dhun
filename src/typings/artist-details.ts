// export interface ArtistDetails {
//     status: string
//     message: any
//     data: Data
//   }
  
  export interface ArtistDetails  {
    id: string
    name: string
    url: string
    image: Image[]
    followerCount: string
    fanCount: string
    isVerified: boolean
    dominantLanguage: string
    dominantType: string
    bio: any[]
    dob: string
    fb: string
    twitter: string
    wiki: string
    availableLanguages: string[]
    isRadioPresent: boolean
  }
  
   interface Image {
    quality: string
    link: string
  }
  
export interface IPhoto {
  id: string
  description: string | null
  alt_description: string | null
  width: number
  height: number

  urls: {
    small: string
    full: string
    regular: string
    thumb: string
  }
  user: {
    name: string
    portfolio_url: string | null
  }
}

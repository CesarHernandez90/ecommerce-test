export interface IProduct {
    id?: number
    title?: string
    price?: number
    description?: string
    category?: string
    image?: string
    count?: number
    rating?: {
        rate?: number
        count?: number
    }
}
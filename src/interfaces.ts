export interface ICategory {
    id: number,
    name: string,
    createdAt: string,
}
export interface IProduct {
    id: string,
    image: string,
    name: string,
    originalPrice: string,
    createdAt: string
    description: string
}
export interface IUser {
    name: string,
    password: string
}
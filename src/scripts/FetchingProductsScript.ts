import { Product } from "../Entities/product"

export async function fetchProducts() : Promise<Product[]>
{
    let products: Product[]
    await fetch("http://localhost:5056/products", {method: 'GET'})
        .then(data => data.json())
        .then(json => products = json)
    return products!
}
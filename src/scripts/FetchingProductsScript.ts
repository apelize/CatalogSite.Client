import { Product } from "../Entities/product"

export async function fetchProducts() : Promise<Product[]>
{
    let products: Product[]
    await fetch(process.env.REACT_APP_FETCH_PRODUCTS_URL!, {method: 'GET'})
        .then(data => data.json())
        .then(json => products = json)
    return products!
}
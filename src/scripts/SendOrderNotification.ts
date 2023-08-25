import { CartProduct } from "../Entities/cartProduct"

export const SendNotification = (cartProducts : Record<string, CartProduct>, phoneNumber : string) => {
    if (phoneNumber.length < 7 || phoneNumber.length > 14) return
    let keys = Object.keys(cartProducts)
    let ProductList: string[] = []
    keys.forEach(key => ProductList.push(cartProducts[key].ProductName + "\tx" + cartProducts[key].Count))
    let request = {phoneNumber: phoneNumber, productList: ProductList}
    fetch("http://localhost:5056/order", {method: 'POST', headers:{ "Content-Type": "application/json" }, body: JSON.stringify(request)})
}
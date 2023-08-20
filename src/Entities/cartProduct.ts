export class CartProduct {
    ProductId: string
    ProductName: string
    ProductImage: string
    Count: number
    constructor(id: string, name: string, image: string, count: number){
        this.ProductId = id;
        this.ProductName = name;
        this.ProductImage = image;
        this.Count = count;
    }
}
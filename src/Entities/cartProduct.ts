export class CartProduct {
    ProductId: string
    Count: number
    constructor(id: string, count: number){
        this.ProductId = id;
        this.Count = count;
    }
}
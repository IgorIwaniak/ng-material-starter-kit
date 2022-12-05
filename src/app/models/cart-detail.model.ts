export interface CartDetailModel {
  readonly id: number;
  readonly userId: number;
  readonly products: [{
    productId: number;
    quantity: number;
  }]
}


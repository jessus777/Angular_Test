export interface responseOrder extends GenericResponse{
    data:      OrderDetails[];
}

export interface OrderDetails {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
    subTotal: number;
    total: number;
    order: any | null;
    product: Product;
}
export interface Product {
    id: number,
    name: string,
    dateCreated: string,
    quantity: number,
    iva: number,
    price: number
}
export interface GenericResponse {
    succeeded: boolean;
    message:   string | null;
    errors:    any | null;
  }
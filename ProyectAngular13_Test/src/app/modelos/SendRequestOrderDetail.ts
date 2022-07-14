
export interface requestOrderDetail extends GenericRequest{
    orderDetails: OrderDetails[];
}

export interface OrderDetails {
    orderId:   number;
    productId: number;
    quantity: number;
    subTotal: number;
    total: number;
}

export interface GenericRequest {
    id: number;
    subTotal: number;
    total: number;
}
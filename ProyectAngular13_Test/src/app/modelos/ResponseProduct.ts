export interface responseProducts extends GenericResponse{
    data:      Products[];
}
export interface Products {
    id:   number;
    name: string;
    dateCreated : string;
    quantity: number,
    iva: number,
    price: number
}

export interface GenericResponse {
    succeeded: boolean;
    message:   string | null;
    errors:    any | null;
  }
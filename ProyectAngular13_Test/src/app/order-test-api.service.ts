import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { responseOrder } from './modelos/ResponseOrderByStatus';
import { Products, responseProducts } from './modelos/ResponseProduct';

@Injectable({
  providedIn: 'root'
})
export class OrderTestApiService {

  readonly orderTestAPIUrl = "https://localhost:7170/api"
  constructor(private http: HttpClient) { }

  getProductTestList():Observable<Products[]>{ //:Observable<any[]>
    return this.http.get<responseProducts>(this.orderTestAPIUrl + '/GetAllProducts').pipe(
      map(({data}) => data),
      catchError(error => throwError(() => new Error(error)))
    );
      
  }


  getOrders(id:number){
    return this.http.get<any>(this.orderTestAPIUrl + `/GetAllOrdersByStatus?statusType=${id}`).pipe(catchError(error => throwError(() => new Error(error))));
  }

  getOrderCreated(){
    return this.http.get<any>(this.orderTestAPIUrl + '/CreateOrder').pipe(catchError(error => throwError(() => new Error(error))));
  }

  addOrderCreated(numberOder:number){
    return this.http.post<any>(this.orderTestAPIUrl + '/AddOrder', {
      orderNumber: numberOder
  }).pipe(catchError(error => throwError(() => new Error(error))));
  }

  getOrderExistents(){
    return this.http.get<any>(this.orderTestAPIUrl + '/GetAllProductsExistents').pipe(catchError(error => throwError(() => new Error(error))));
  }

  addCustomer(data:any){
    return this.http.post(this.orderTestAPIUrl + '/CreateCustomer', data)
  }
  
  updateOders(id:number|string, statusType :number|string, data: any){
    return this.http.put(this.orderTestAPIUrl + `/UpdateOrderByStatusType?id=${id}&statusType=${statusType}`, data)
  }

  addOrderAndDetails(idOrder:number, orderSubtotal:number, orderTotal:number,  data: any){
    return this.http.post<any>(this.orderTestAPIUrl + '/AddOrderAndDetails', {
      id: idOrder,
      subTotal: orderSubtotal,
      total: orderTotal,
      orderDetails: data
  }).pipe(catchError(error => throwError(() => new Error(error))));
  }

  updateOrderStatus(idOrder:number, orderStatus:number){
    return this.http.put<any>(this.orderTestAPIUrl + '/UpdateOrderByStatusType', {
      id: idOrder,
      statusType: orderStatus
  }).pipe(catchError(error => throwError(() => new Error(error))));
  }
}


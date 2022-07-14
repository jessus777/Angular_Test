import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products, responseProducts } from 'src/app/modelos/ResponseProduct';
import { requestOrderDetail } from 'src/app/modelos/SendRequestOrderDetail';
import { OrderTestApiService } from 'src/app/order-test-api.service';


@Component({
  selector: 'app-show-oder',
  templateUrl: './show-oder.component.html',
  styleUrls: ['./show-oder.component.css']
})
export class ShowOderComponent implements OnInit {

    public productsList$!: Observable<Products[]>; //:Observable<any[]>;
    public orderDetail:Array<any> = [];
    public success: boolean = false;
    public messageError! : string;
    public orderNumber!:number;
    public ProductSelected : string = "";
    public showButtonCreate : string="disabled";
    public showButtonCreateDisabled : string="true";
    public showProductSelected: boolean = false;
    public productExistents: Array<any> = [];
    public orderNumberNew!:number;
    public messageAddOrder! : string;
    public successAddOrder: boolean = false;
    public orderId!:number;
    public showAddOrderDetail: boolean = false;
    public orderDetails: Array<any> = [];
    public order!: requestOrderDetail;
    public quantity:number = 1;
    public count:number = 0;

    public totalOrder:number=0;
    public subtotalOrder:number = 0;


  constructor(private service:OrderTestApiService) { }

  ngOnInit(): void {
    this.productsList$ = this.service.getProductTestList();
    this.getListOrder(0);
    this.createOrder();
  }

  getListOrder(id:number){

    this.service.getOrders(id).subscribe(res => {
      if(res.succeeded == false){
        this.success = res.succeeded;
        this.messageError = res.message;
        return;
      }
      this.success = true;
      this.orderDetail = res.data;
    })
  }

  getListProducts(){
    this.productsList$ = this.service.getProductTestList();
  }

  createOrder(){
    this.service.getOrderCreated().subscribe(res => {
      if(res.succeeded == false){
        this.success = res.succeeded;
        this.messageError = res.message;
        return;
      }
      this.success = true;
      this.orderNumber = res.data;
    })
  }

  showSelectedProducts(){
    this.showProductSelected = true;
    this.getProducts();
  }

  getProducts(){
    this.service.getOrderExistents().subscribe(res => {
      if(res.succeeded == false){
        //this.success = res.succeeded;
        //this.messageError = res.message;
        return;
      }
      //this.success = true;
      this.productExistents = res.data;
    })
  }

  addOrderNew(numberOder:number){
    this.service.addOrderCreated(numberOder).subscribe(res => {
      if(res.succeeded == false){
        this.successAddOrder = res.succeeded;
        this.messageAddOrder = res.message;
        return;
      }
      this.successAddOrder = true;
      this.orderNumberNew = res.data;
    })
  }

  onOptionsSelected(event:any){
    if(event.target.value !== "" || event.target.value !== null){
      this.showAddOrderDetail = true;
      const valueSelect = event.target.value;
      const product = this.productExistents.find(p => p.name == valueSelect);
      if(product != null){
        
        var orderDetail = {
          orderId : this.orderNumberNew,
          productId: product.id,
          quantity: this.quantity,
          subTotal: this.quantity * product.price,
          total: this.quantity * product.price + (( this.quantity * product.price) * (product.iva/100))
        };
        this.subtotalOrder = this.subtotalOrder + orderDetail.subTotal; 
        this.totalOrder = this.totalOrder + orderDetail.total;
        this.orderDetails.push(orderDetail);
      }
      console.log(this.subtotalOrder);
      console.log(product);
      console.log(this.orderDetails);
    }
  
    console.log(event.target.value);
  }

  onChangeQuantity(idProduct : number, event:any)
  {
    const product = this.orderDetails.find(p => p.productId == idProduct);
    if(product != null){
      const quantityNew = Number.parseFloat(event.target.value) == 0 ? 1 : Number.parseFloat(event.target.value);
      const productExistents = this.productExistents.find(p => p.id == product.productId);
      product.quantity = quantityNew;
      product.subTotal = quantityNew * productExistents.price,
      product.total = quantityNew * productExistents.price + (( quantityNew * productExistents.price) * (productExistents.iva/100))
    }
    this.subtotalOrder = 0;
    this.totalOrder  = 0;
    this.orderDetails.forEach(element => {
      this.subtotalOrder =  this.subtotalOrder + element.subTotal;
      this.totalOrder =   this.totalOrder +  element.total;
    });
    console.log(event.target.value);
    console.log(product);

  }
  getProductName(productId:number):string{
    const product = this.productExistents.find(p => p.id == productId); 
    return product.name;
  }
//addOrderAndDetails(idOrder:number, orderSubtotal:number, orderTotal:number,  data: any)
  addOrderAndOrderDetails(idOrder:number, orderSubtotal:number, orderTotal:number,  data: any){
    this.service.addOrderAndDetails(idOrder, orderSubtotal, orderTotal,  data).subscribe(res => {
      if(res.succeeded == false){
        this.successAddOrder = res.succeeded;
        this.messageAddOrder = res.message;
        return;
      }
      this.successAddOrder = true;
      this.orderId = res.data;
      const message= `Se creo la Orden #${this.orderId}, correctament`;
      alert(message);
      window.location.reload();
    })
  }

  updateOrderStatusType(idOrder:number, orderStatus:number){
    this.service.updateOrderStatus(idOrder, orderStatus).subscribe(res => {
      if(res.succeeded == false){
        this.successAddOrder = res.succeeded;
        this.messageAddOrder = res.message;
        return;
      }
      this.successAddOrder = true;
      this.orderId = res.data;
      window.location.reload();
    })
  }

}

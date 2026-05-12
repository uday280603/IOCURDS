import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../module/Iproduct';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  productArr: Iproduct[] = [
    {
      id: 1,
      title: 'Laptop',
      category: 'Electronics',
      price: 55000,
      quantity: 10,
      brand: 'Dell',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Running Shoes',
      category: 'Footwear',
      price: 2999,
      quantity: 25,
      brand: 'Nike',
      isAvailable: true,
    },
    {
      id: 3,
      title: 'Office Chair',
      category: 'Furniture',
      price: 7500,
      quantity: 5,
      brand: 'GreenSoul',
      isAvailable: false,
    },
  ];
  editObj !: Iproduct;

  constructor(private _snackBar : SnackBarService) {}

  ngOnInit(): void {}
  getNewproductObj(newProduct: Iproduct) {
    this.productArr.unshift(newProduct);
    this._snackBar.openSnackBar(`New Product ${newProduct.title} is Added Successfully..!`)
  }
  getRemoveId(removeId : number){
    let getIndex = this.productArr.findIndex(rId => rId.id === removeId);
    this.productArr.splice(getIndex,1);
    this._snackBar.openSnackBar(`Product Deleted successfully..!`)
  }
  getEditObj(editProductObj : Iproduct){
    this.editObj = editProductObj;


  }
  getUpdatedObj(updatedObj : Iproduct){
    let getIndex = this.productArr.findIndex(p =>p.id === updatedObj.id);
    this.productArr[getIndex] = updatedObj;
    this._snackBar.openSnackBar(`Product ${updatedObj.title} is updated Successfully...!`);
  }
}

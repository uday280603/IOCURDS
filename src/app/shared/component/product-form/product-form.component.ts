import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Iproduct } from '../../module/Iproduct';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnChanges {
  isInEditMode: boolean = false;
  @ViewChild('productName') productName!: ElementRef;
  @ViewChild('productCategory') productCategory!: ElementRef;
  @ViewChild('productPrice') productPrice!: ElementRef;
  @ViewChild('productQuantity') productQuantity!: ElementRef;
  @ViewChild('productBrand') productBrand!: ElementRef;
  @ViewChild('productisAvaible') productisAvaible!: ElementRef;

  @Input() getEditObj!: Iproduct;

  @Output() emitNewProductObj: EventEmitter<Iproduct> =
    new EventEmitter<Iproduct>();

  @Output() emitUpdatedObj: EventEmitter<Iproduct> =
    new EventEmitter<Iproduct>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['getEditObj'].currentValue) {
      this.isInEditMode = true;
      this.productName.nativeElement.value = this.getEditObj.title;
      this.productCategory.nativeElement.value = this.getEditObj.category;
      this.productPrice.nativeElement.value = this.getEditObj.price;
      this.productQuantity.nativeElement.value = this.getEditObj.quantity;
      this.productBrand.nativeElement.value = this.getEditObj.brand;
      this.productisAvaible.nativeElement.value = this.getEditObj.isAvailable;
    }
  }

  ngOnInit(): void {}

  addProduct() {
    let val1: string = this.productName.nativeElement.value;
    let val2: string = this.productBrand.nativeElement.value;
    if (val1.length > 0 && val2.length > 0) {
      let NEW_PRODUCT_OBJ: Iproduct = {
        id: Date.now(),
        title: this.productName.nativeElement.value,
        category: this.productCategory.nativeElement.value,
        price: this.productPrice.nativeElement.value,
        quantity: this.productQuantity.nativeElement.value,
        brand: this.productBrand.nativeElement.value,
        isAvailable:
          this.productisAvaible.nativeElement.value === 'true' ? true : false,
      };
      // console.log(NEW_PRODUCT_OBJ);
      this.emitNewProductObj.emit(NEW_PRODUCT_OBJ);
      this.productName.nativeElement.value = '';
      this.productCategory.nativeElement.value = '';
      this.productPrice.nativeElement.value = '';
      this.productQuantity.nativeElement.value = '';
      this.productBrand.nativeElement.value = '';
      this.productisAvaible.nativeElement.value = true;
    }
  }

  onUpdateProduct() {
    let UPDATED_OBJ: Iproduct = {
      id: this.getEditObj.id,
      title: this.productName.nativeElement.value,
      category: this.productCategory.nativeElement.value,
      price: this.productPrice.nativeElement.value,
      quantity: this.productQuantity.nativeElement.value,
      brand: this.productBrand.nativeElement.value,
      isAvailable:
        this.productisAvaible.nativeElement.value === 'true' ? true : false,
    };
    console.log(UPDATED_OBJ);
    this.emitUpdatedObj.emit(UPDATED_OBJ);
    this.isInEditMode = false;
    this.productName.nativeElement.value = '';
    this.productCategory.nativeElement.value = '';
    this.productPrice.nativeElement.value = '';
    this.productQuantity.nativeElement.value = '';
    this.productBrand.nativeElement.value = '';
    this.productisAvaible.nativeElement.value = true;
  }
}

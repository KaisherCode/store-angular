import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import {ReversePipe} from '@shared/pipes/reverse.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReversePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addTocart = new EventEmitter();

  addToCartHandler(){
    this.addTocart.emit(this.product);
  }
}

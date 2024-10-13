import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])

  constructor(){
    const initProduct: Product[]=[
      {
        id: Math.random(),
        title: 'Mouse teros negro',
        price: 25,
        image: 'https://picsum.photos/640/640?r=23',
        createdAt: new Date().toISOString()
      },
      {
        id: Math.random(),
        title: 'Disco SSD crucial MBX 240GB',
        price: 150,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toISOString()
      },
      {
        id: Math.random(),
        title: 'Memoria RAM 8GB Fury',
        price: 150,
        image: 'https://picsum.photos/640/640?r=25',
        createdAt: new Date().toISOString()
      }
    ];
    this.products.set(initProduct);
  }
  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);
  }
}

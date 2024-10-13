import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])
  cart = signal<Product[]>([]);

  constructor(){
    const initProduct: Product[]=[
      {
        id: Math.random(),
        title: 'Mouse teros negro',
        price: 25,
        image: 'https://picsum.photos/640/640?r=23',
        createdAt: new Date().toISOString().slice(2,10)
      },
      {
        id: Math.random(),
        title: 'Disco SSD crucial MBX 240GB',
        price: 150,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toISOString().slice(2,10)
      },
      {
        id: Math.random(),
        title: 'Memoria RAM 8GB Fury',
        price: 150,
        image: 'https://picsum.photos/640/640?r=25',
        createdAt: new Date().toISOString().slice(2,10)
      },
      {
        id: Math.random(),
        title: 'Laptop Lenovo Idea pad',
        price: 1500,
        image: 'https://picsum.photos/640/640?r=26',
        createdAt: new Date().toISOString().slice(2,10)
      },
      {
        id: Math.random(),
        title: 'Impresora Epson L3290',
        price: 960,
        image: 'https://picsum.photos/640/640?r=27',
        createdAt: new Date().toISOString().slice(2,10)
      },
      {
        id: Math.random(),
        title: 'Laptop HP 250 ',
        price: 1200,
        image: 'https://picsum.photos/640/640?r=28',
        createdAt: new Date().toISOString().slice(2,10)
      },
      {
        id: Math.random(),
        title: 'Memoria USB 23GB HP',
        price: 35,
        image: 'https://picsum.photos/640/640?r=29',
        createdAt: new Date().toISOString().slice(2,10)
      },
      {
        id: Math.random(),
        title: 'Case termaltake negro',
        price: 100,
        image: 'https://picsum.photos/640/640?r=30',
        createdAt: new Date().toISOString().slice(2,10)
      }
    ];
    this.products.set(initProduct);
  }

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}

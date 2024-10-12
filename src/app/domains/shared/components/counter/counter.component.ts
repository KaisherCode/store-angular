import { Component, Input, SimpleChanges } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number=0;
  @Input({required: true}) message: string = '';

  constructor(){
    // NO ASYNC
    // before render
    console.log('constructor');
    console.log('_'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // before and during render
    console.log('ngOnChanges');
    console.log('_'.repeat(10)),
    console.log(changes)
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-math-operator',
  templateUrl: './math-operator.component.html',
  styleUrls: ['./math-operator.component.css']
})
export class MathOperatorComponent implements OnInit {

  @Output() addEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() multiplyEvent: EventEmitter<number> = new EventEmitter<number>();

  private addends1: number = 0;
  private addends2: number = 0;

  private multiplicand: number = 0;
  private multiplier: number = 0;

  private sum: number = 0;
  private product: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onAddButtonClick() {
    this.sum = Number.parseInt(this.addends1.toString()) + Number.parseInt(this.addends2.toString());
    this.addEvent.emit(this.sum);
  }

  onMultiplyButtonClick() {
    this.product = this.multiplicand * this.multiplier;
    this.multiplyEvent.emit(this.product);
  }

}

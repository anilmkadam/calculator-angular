import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calculator-angular';
  input1: string;
  input2: string;
  operator: string;
  result: string;

  constructor() {
    this.result = '0';
    this.input1 = '';
    this.input2 = '';
    this.operator = '';
  }

  ngOnInit() {}

  onOperatorClick(event): void {
    if (this.operator === '' && this.input1 !== '') {
      this.operator = event.target.value;
      this.result += this.operator;
    }
    else {
      alert('Operation Not allowed!!!');
    }
  }

  onNumberClick(event): void {
    console.log(event.target.value);
    if (this.input1 === '') {
      this.input1 = event.target.value;
      this.result = this.input1;
    }
    else if (this.operator !== '') {
      if (this.input2 === '') {
        this.input2 = event.target.value;
        this.result += this.input2;
      }
      else {
        this.input2 += event.target.value;
        this.result += event.target.value;
      }
    }
    else {
      this.input1 += event.target.value;
      this.result = this.input1;
    }
  }

  clear(): void {
    this.input1 = this.result;
    this.input2 = '';
    this.operator = '';
  }

  onGetResult(): void {
    switch(this.operator) {
      case '+' :
        this.result = `${parseInt(this.input1) + parseInt(this.input2)}`;
        this.clear();
        break;

        case '-' :
        this.result = `${parseInt(this.input1) - parseInt(this.input2)}`;
        this.clear();
        break;

        case '*' :
        this.result = `${parseInt(this.input1) * parseInt(this.input2)}`;
        this.clear();
        break;

        case '/' :
        this.result = `${parseInt(this.input1) / parseInt(this.input2)}`;
        this.clear();
        break;
    }
  }

  onScreenClear(): void {
    this.result = '0';
    this.input1 = '';
    this.input2 = '';
    this.operator = '';
  }
}

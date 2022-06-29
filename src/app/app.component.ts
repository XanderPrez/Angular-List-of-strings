import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  //parent component here exchange data from one child to the other
  selector: 'my-app',
  template: `<app-send-input (inputValue)="addItem($event)"> </app-send-input>
    <app-show-list [showStrings]="stringValue"> </app-show-list>
  `,
})
export class AppComponent {
  stringValue = [];
  addItem(incomingValue: string) {
    // push string to the items array
    this.stringValue.push(incomingValue);
  }
}

@Component({
  // this component sends data to the parent component
  selector: 'app-send-input',
  template: `<input placeholder="Insert text" type="text" #incomingValue/>
  <button (click)="addNewItem(incomingValue.value)">Send</button>`,
  styles: [''],
})
export class AppOutputComponent {
  @Output() inputValue = new EventEmitter<string>();

  addNewItem(value: string) {
    this.inputValue.emit(value);
  }
}

@Component({
  selector: 'app-show-list',
  template: `<p>Show a list of strings:</p><ul><li *ngFor="let item of showStrings">{{item}}</li></ul>`, //this creates a series of li for each input sent
  styles: [''],
})
export class AppInputComponent {
  // prints array with items
  @Input() showStrings = [];
}

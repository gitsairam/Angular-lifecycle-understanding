import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  constructor() {
    console.log('constructor called');
  }
  ngOnInit() {
    console.log('onInit called');
  }
  ngDoCheck() {
    console.log('do check called');
  }
  ngOnChanges() {
    console.log('on change called');
  }
  ngAfterContentInit() {
    console.log('content init');
  }
  ngAfterContentChecked() {
    console.log('content checked');
  }
  ngAfterViewInit() {
    console.log('View init');
  }
  ngAfterViewChecked() {
    console.log('View check');
  }
}

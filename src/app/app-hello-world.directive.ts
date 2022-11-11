import { Directive } from '@angular/core';

@Directive({
  selector: '<div[appHelloWorld], span[appHelloWorld]'
})
export class AppHelloWorldDirective {

  constructor() { }

}

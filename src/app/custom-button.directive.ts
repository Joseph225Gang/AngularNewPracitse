import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomButton]',
  exportAs: 'customButton'
})
export class AppHelloWorldDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'padding' ,'10px');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize' ,'14px');
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight' ,'bold');
  }

}

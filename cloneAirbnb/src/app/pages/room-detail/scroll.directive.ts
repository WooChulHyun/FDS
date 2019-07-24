import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  scrollToTop = 640;

  constructor(public el:ElementRef, public renderer: Renderer2) { 
  }
  
  @HostListener("window:scroll") handler(){
    this.renderer.setStyle(
      this.el.nativeElement,
      'position',
      window.pageYOffset > this.scrollToTop ? 'fixed' : 'absolute');

      this.renderer.setStyle(
        this.el.nativeElement,
        'top',
        window.pageYOffset > this.scrollToTop ? '1px' : '1px');

        // this.renderer.setStyle(
        //   this.el.nativeElement,
        //   'margin-left',
        //   window.pageYOffset > this.scrollToTop ? '1%' : '1%');
  }
}

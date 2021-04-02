import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appEmptyField]'
})
export class EmptyFieldDirective {
  @HostListener('mouseenter', ['$event']) private emptyField(event: MouseEvent): void {
    console.log(this.el.nativeElement);
    this.el.nativeElement.value = '';
  }
  constructor(private el: ElementRef<any>) { }

}

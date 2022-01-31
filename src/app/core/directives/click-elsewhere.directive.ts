import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickElsewhere]',
})
export class ClickElsewhereDirective {
  @Output() clickElsewhere = new EventEmitter<MouseEvent>();
  @Input() clickElsewhereExceptions: HTMLElement[] = [];

  constructor(private elementRef: ElementRef) {}

  isExceptionClicked(clickedElement: HTMLElement): boolean {
    for (let i = 0; i < this.clickElsewhereExceptions.length; i++) {
      const exception = this.clickElsewhereExceptions[i];
      if (exception.contains(clickedElement)) {
        return true;
      }
    }
    return false;
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (this.isExceptionClicked(targetElement)) {
      return;
    }

    if (
      targetElement &&
      !this.elementRef.nativeElement.contains(targetElement)
    ) {
      this.clickElsewhere.emit(event);
    }
  }
}

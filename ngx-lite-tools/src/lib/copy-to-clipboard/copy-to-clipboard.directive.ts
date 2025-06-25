import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[copyToClipboard]',
  standalone: true,
})
export class CopyToClipboardDirective {
  @Input('copyToClipboard') textToCopy?: string;
  @Output() copied = new EventEmitter<boolean>();

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('click')
  onClick(): void {
    const text = this.textToCopy ?? this._getTextFromElement();

    if (!text) {
      this.copied.emit(false);
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => this.copied.emit(true),
      () => this.copied.emit(false)
    );
  }

  private _getTextFromElement(): string | undefined {
    const element = this.el.nativeElement;

    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      return element.value;
    }

    return element.textContent?.trim();
  }
}

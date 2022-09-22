import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColHeader]'
})
export class ColHeaderDirective implements OnInit {

  private resizer: any;

  private x = 0;
  private w = 0;

  mouseDownHandler: any;
  mouseMoveHandler: any;
  mouseUpHandler: any;

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    this.mouseDownHandler = this.mouseDownHandlerFun.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandlerFun.bind(this);
    this.mouseUpHandler = this.mouseUpHandlerFun.bind(this);
  }

  ngOnInit() {
    if (this.el.nativeElement.parentElement?.parentElement) {
      this.resizer = document.createElement('div');
      this.resizer.classList.add('resizer');

      // Set the height
      this.resizer.style.height = `${this.el.nativeElement.offsetHeight}px`;

      // Add a resizer element to the column
      this.el.nativeElement.appendChild(this.resizer);

      this.el.nativeElement.style.minWidth = this.el.nativeElement.style.width;

      // Will be implemented in the next section
      this.createResizableColumn(this.el.nativeElement, this.resizer);
    }
  }

  createResizableColumn(col: any, resizer: any) {
    resizer.addEventListener('mousedown', this.mouseDownHandler);
  };

  mouseDownHandlerFun(e: any) {
    this.x = e.clientX;
    // Calculate the current width of column
    const styles = window.getComputedStyle(this.el.nativeElement);
    this.w = parseInt(styles.width, 10);

    // Attach listeners for document's events
    document.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseup', this.mouseUpHandler);
  };

  mouseMoveHandlerFun(e: any) {
    // Determine how far the mouse has been moved
    const dx = e.clientX - this.x;

    // Update the width of column
    this.el.nativeElement.style.minWidth = `${this.w + dx}px`;
  };

  // When user releases the mouse, remove the existing event listeners
  mouseUpHandlerFun() {
    console.log('mouseup')
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseup', this.mouseUpHandler);
  };

}

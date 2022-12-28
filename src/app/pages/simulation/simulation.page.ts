import { Component, OnInit, OnChanges, OnDestroy, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SimulationService } from './simulation.service';

@Component({
  selector: 'hy-page-simulation',
  templateUrl: './simulation.page.html',
  styleUrls: ['./simulation.page.scss']
})
export class SimulationPage implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef | undefined = undefined;

  constructor (
    private readonly hostElement: ElementRef,
    public readonly service: SimulationService
  ) {
    // do nothing.
  }

  ngOnInit (): void {
    // debugger;
    // this.canvas?.nativeElement && this.service.onInit(this.canvas?.nativeElement)
    // this.onResize();
    // const styles = getComputedStyle(this.hostElement.nativeElement as HTMLElement);
    // console.log('Width', styles.width, 'Height', styles.height);
  }

  ngAfterViewInit (): void {
    if (this.canvas?.nativeElement) {
      this.service.onInit(this.canvas.nativeElement as HTMLCanvasElement);
      this.onResize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize (): void {
    if (this.hostElement.nativeElement && this.canvas?.nativeElement) {
      const cvs          = this.canvas.nativeElement as HTMLCanvasElement;
      const headerStyles = getComputedStyle(document.querySelector('header')  as HTMLElement );
      const footerStyles = getComputedStyle(document.querySelector('footer')  as HTMLElement );
      const heightHeader = parseInt(headerStyles.height ?? '64', 10);
      const heightFooter = parseInt(footerStyles.height ?? '20', 10);
      // const styles      = getComputedStyle(this.hostElement.nativeElement as HTMLElement);
      // const width       = parseInt(styles.width, 10)  - 10;
      // const height      = parseInt(styles.height, 10) - 10;
      const width       = -10 + window.innerWidth;
      const height      = -10 + window.innerHeight - heightHeader - heightFooter;
      cvs.style.width   = String(width)  + 'px';
      cvs.style.height  = String(height) + 'px';
      cvs.width         = width;
      cvs.height        = height;
      this.service.onResize(width, height);
      console.log('host.native', this.hostElement.nativeElement)
    }
  }

  ngOnChanges (): void {
    // do nothing.
  }

  ngOnDestroy (): void {
    // do nothing.
  }

}

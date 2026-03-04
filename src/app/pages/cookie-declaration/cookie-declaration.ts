import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cookie-declaration',
  standalone: true,
  templateUrl: './cookie-declaration.html',
})
export class CookieDeclaration implements AfterViewInit {
  @ViewChild('declarationContainer') containerRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.id = 'CookieDeclaration';
    script.src =
      'https://consent.cookiebot.com/2b542c20-8966-43bb-8bd0-9bc7d3411b72/cd.js';
    script.type = 'text/javascript';
    script.async = true;

    this.containerRef.nativeElement.appendChild(script);
  }
}
import { isPlatformBrowser } from "@angular/common";
import {
  Directive,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[externalLink]",
})
export class ExternalLinkDirective implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private readonly el = inject(ElementRef);
  private readonly size = "0.75rem";
  private readonly viewBox = "0 0 24 24";

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const svg = this.renderer.createElement("svg", "svg");
    this.renderer.setAttribute(svg, "xmlns", "http://www.w3.org/2000/svg");
    this.renderer.setAttribute(svg, "viewBox", this.viewBox);
    this.renderer.setAttribute(svg, "width", this.size);
    this.renderer.setAttribute(svg, "height", this.size);

    const p2 = this.renderer.createElement("path", "svg");
    this.renderer.setAttribute(p2, "fill", "none");
    this.renderer.setAttribute(p2, "stroke", "currentColor");
    this.renderer.setAttribute(p2, "stroke-linecap", "round");
    this.renderer.setAttribute(p2, "stroke-linejoin", "round");
    this.renderer.setAttribute(p2, "stroke-width", "2");
    this.renderer.setAttribute(p2, "d", "M7 7h10v10M7 17L17 7");
    this.renderer.appendChild(svg, p2);
    this.renderer.appendChild(this.el.nativeElement, svg);
  }
}

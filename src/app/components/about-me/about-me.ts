import { Component } from "@angular/core";
import { ExternalLinkDirective } from "../../directives/external-link.directive";

@Component({
  templateUrl: "./about-me.html",
  styleUrl: "./about-me.css",
  imports: [ExternalLinkDirective],
})
export class AboutMe {}

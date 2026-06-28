import { Component } from "@angular/core";
import { ExternalLinkDirective } from "../../directives/external-link.directive";

@Component({
  templateUrl: "./contact.html",
  styleUrl: "./contact.css",
  imports: [ExternalLinkDirective],
})
export class Contact {}

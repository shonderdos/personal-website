import { Routes } from "@angular/router";
import { Experiences } from "./components/experiences/experiences";
import { Home } from "./components/home/home";
import { Contact } from "./components/contact/contact";
import { AboutMe } from "./components/about-me/about-me";

export const routes: Routes = [
  { path: "", component: Home },
  { path: "experiences", component: Experiences },
  { path: "contact", component: Contact },
  { path: "about-me", component: AboutMe },
];

import { Routes } from "@angular/router";
import { Experiences } from "./components/experiences/experiences";
import { Home } from "./components/home/home";
import { Contact } from "./components/contact/contact";

export const routes: Routes = [
  { path: "", component: Home },
  { path: "experiences", component: Experiences },
  { path: "contact", component: Contact },
];

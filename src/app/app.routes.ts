import { Routes } from "@angular/router";
import { Experiences } from "./components/experiences/experiences";
import { Home } from "./components/home/home";

export const routes: Routes = [
  { path: "", component: Home },
  { path: "experiences", component: Experiences },
];

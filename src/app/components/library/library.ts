import { Component } from "@angular/core";

interface Book {
  title: string;
  author: string;
  cover: string;
}

@Component({
  selector: "app-library",
  templateUrl: "./library.html",
  styleUrl: "./library.css",
})
export class Library {
  protected readonly books: Book[] = [
    {
      title: "Test-Driven Development",
      author: "Kent Beck",
      cover: "/test-driven-development.jpg",
    },
    {
      title: "The Clean Coder",
      author: "Robert C. Martin",
      cover: "/the-clean-coder.jpg",
    },
    {
      title: "Working Effectively with Legacy Code",
      author: "Michael C. Feathers",
      cover: "/working-effectively-with-legacy-code.jpg",
    },
    {
      title: "Clean Architecture",
      author: "Robert C. Martin",
      cover: "/clean-architecture.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      cover: "/clean-code.jpg",
    },
    {
      title: "Refactoring",
      author: "Martin Fowler",
      cover: "/refactoring.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas and Andrew Hunt",
      cover: "/the-pragmatic-programmer.jpg",
    },
  ];
}

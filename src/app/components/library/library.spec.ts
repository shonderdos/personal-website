import { TestBed } from "@angular/core/testing";
import { Library } from "./library";

describe("Library", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Library],
    }).compileComponents();
  });

  it("should render each mock book with its title and author", () => {
    const fixture = TestBed.createComponent(Library);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll(".book")).toHaveLength(8);
    expect(compiled.textContent).toContain("The Pragmatic Programmer");
    expect(compiled.textContent).toContain("David Thomas and Andrew Hunt");
  });

  it("should render books as non-navigable cards", () => {
    const fixture = TestBed.createComponent(Library);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll("a, button")).toHaveLength(0);
  });
});

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public showInput: string;
  public message: string;
  constructor() {
    this.showInput = "text";
  }

  public showMessage(): void {
    this.message = "Hello my friend, i like Angular";
  }
  ngOnInit(): void {}
}

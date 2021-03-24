import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.page.html",
  styleUrls: ["./faq.page.scss"],
})
export class FaqPage implements OnInit {
  questions: { id: number; question: string }[];
  constructor() {
    this.showQuestions();
  }

  ngOnInit() {}

  showQuestions() {
    this.questions = [
      { id: 1, question: "¿Qué son las vacunas?" },
      { id: 2, question: "¿Cómo funcionan las vacunas?" },
      { id: 3, question: "¿Son seguras las vacunas?" },
      { id: 4, question: "¿Por qué debería vacunar a mi hijo?" },
      { id: 5, question: "¿Qué es la inmunidad colectiva?" },
    ];
  }
}

import { Component } from "@angular/core";
import questions from "../questions.json";

@Component({
  selector: "questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent {
  questions: any = questions;
  i: number = 0;
  question: any = this.questions[this.i];

  totalQuestions = questions.length;

  ngOnInit() {
    console.log(this.questions[0]);
    console.log(this.question);
  }
  answer: any;
  score: any = 0;
  onSelecting(value) {
    console.log(value);
    this.answer = value;
  }

  onPrev() {
    --this.i;
    this.question = this.questions[this.i];
  }

  onNext() {
    if (this.answer === this.question.answer) {
      ++this.score;
    }
    console.log("Score : ", this.score);
    // console.log(this.questions);
    console.log("Answer : ", this.answer);
    ++this.i;
    this.question = this.questions[this.i];
    console.log(this.i);
    console.log("Question : ", this.question);
    console.log("on click");
  }
}

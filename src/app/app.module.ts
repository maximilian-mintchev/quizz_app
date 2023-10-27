import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { QuestionsComponent } from "src/questions/questions.component";
import { TimerComponent } from "src/timer/timer.component";

@NgModule({
  declarations: [AppComponent, QuestionsComponent, TimerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

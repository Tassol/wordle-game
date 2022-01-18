import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { WordrowComponent } from './components/wordrow/wordrow.component';
import { LetterboxComponent } from './components/letterbox/letterbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    WordrowComponent,
    LetterboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

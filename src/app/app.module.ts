import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { WordrowComponent } from './components/wordrow/wordrow.component';
import { LetterboxComponent } from './components/letterbox/letterbox.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import{ MatButtonModule } from '@angular/material/button';
import { KeyboardRowComponent } from './components/keyboard/keyboard-row/keyboard-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    WordrowComponent,
    LetterboxComponent,
    KeyboardComponent,
    KeyboardRowComponent,
  ],
  imports: [BrowserModule,MatButtonModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

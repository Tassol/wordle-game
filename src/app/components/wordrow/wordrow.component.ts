import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordrow',
  templateUrl: './wordrow.component.html',
  styleUrls: ['./wordrow.component.css'],
})
export class WordrowComponent implements OnInit {
  public wordLenght = 5;
  private word = 'carol';
  public rowArray = new Array<any> (6);
  public letters!: Array<string>;

  constructor() {}

  ngOnInit(): void {
    this.letters = this.getLetters(this.word);
  }

  private getLetters(word: string): Array<string> {
    return word.split('');
  }
}

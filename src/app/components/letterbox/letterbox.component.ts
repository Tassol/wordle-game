import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letterbox',
  templateUrl: './letterbox.component.html',
  styleUrls: ['./letterbox.component.css']
})
export class LetterboxComponent implements OnInit {

  @Input() letter!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard-row',
  templateUrl: './keyboard-row.component.html',
  styleUrls: ['./keyboard-row.component.css']
})
export class KeyboardRowComponent implements OnInit {
@Input() row: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

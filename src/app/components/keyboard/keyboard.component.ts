import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  public firstRow = ['q','w','e','r','t','y','u','i','o','p'];
  public secondRow = ['a','s','d','f','g','h','j','k','l'];
  public thirdRow = ['z','x','c','v','b','n','m'];

  constructor() { }

  ngOnInit(): void {
  }

}

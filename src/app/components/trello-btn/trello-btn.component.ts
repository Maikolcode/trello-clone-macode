import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello-btn',
  templateUrl: './trello-btn.component.html'
})
export class TrelloBtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() colorType: 'success' | 'primary' | 'secondary' = 'success';

  constructor() { }

  ngOnInit(): void {
    console.log('hello world');
  }
}

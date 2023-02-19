import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello-btn',
  templateUrl: './trello-btn.component.html'
})
export class TrelloBtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() colorType: string = 'bg-success-600';

  constructor() { }

  ngOnInit(): void {
    console.log('hello world');
  }
}

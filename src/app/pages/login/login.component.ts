import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('hello world');
  }

  onSubmit(): void {
    this.router.navigate(['board'])
  }
}

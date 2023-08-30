import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
  ){}

  redirectBio(){
    this.router.navigate(['/bio'])
  }

  redirectGithub(){
    window.open("https://github.com/Braquetes", "_blank");
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router : Router, private activeRoute: ActivatedRoute){}

  linker(){
    this.router.navigate(['item'], {relativeTo:this.activeRoute })
  }
}

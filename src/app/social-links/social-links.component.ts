import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
    library.addIcons(faInstagram,faTwitter,faTwitch);
    }
  
  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

import { navbarData } from './nav-data';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent  extends HomePageComponent  {
  
 
  navData = navbarData;
  

 
   
}

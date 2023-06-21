import { Component, OnInit } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = ETheme.ICON_MOON;

  constructor(){}

  ngOnInit(): void {
  }

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme');
    this.icon = (theme) ? ETheme.ICON_SUN : ETheme.ICON_MOON;
  }
}

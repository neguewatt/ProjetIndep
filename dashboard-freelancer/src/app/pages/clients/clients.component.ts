import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  text: string;
}

@Component({
  selector: 'ngx-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnDestroy {
	private alive = true;

  Particulier: CardSettings = {
    title: 'Particulier',
    iconClass: 'nb-person',
    type: 'primary',
    text: 'client sans société',
  };
  Professionnel: CardSettings = {
    title: 'Professionnel',
    iconClass: 'nb-roller-shades',
    type: 'success',
    text: 'client avec société',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.Particulier,
    this.Professionnel,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.Particulier,
        type: 'warning',
      },
      {
        ...this.Professionnel,
        type: 'primary',
      },
    ],
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
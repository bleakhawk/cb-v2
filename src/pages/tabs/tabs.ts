import { Component } from '@angular/core';

import { ArtistsPage } from '../../pages/artists/artists';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { MorePage } from '../../pages/more/more';
import { WorkshopsPage } from '../../pages/workshops/workshops';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WorkshopsPage;
  tab2Root = ArtistsPage;
  tab3Root = FavoritesPage;
  tab4Root = MorePage;

  constructor() {

  }
}

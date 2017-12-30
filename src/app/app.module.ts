import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CongressBuddyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ArtistsPage } from '../pages/artists/artists';
import { FavoritesPage } from '../pages/favorites/favorites';
import { MorePage } from '../pages/more/more';
import { WorkshopsPage } from '../pages/workshops/workshops';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Services
import { FirebaseService } from '../services/firebase.service';

@NgModule({
  declarations: [
    CongressBuddyApp,
    ArtistsPage,
    FavoritesPage,
    MorePage,
    WorkshopsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CongressBuddyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CongressBuddyApp,
    ArtistsPage,
    FavoritesPage,
    MorePage,
    WorkshopsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService,
  ]
})
export class AppModule {}

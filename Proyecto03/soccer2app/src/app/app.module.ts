import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { StandingsComponent } from './standings/standings.component';
import { StatsComponent } from './stats/stats.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { LeagueSelectorComponent } from './league-selector/league-selector.component';
import { LogobannerComponent } from './logobanner/logobanner.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsItemComponent,
    StandingsComponent,
    StatsComponent,
    PhotoCardComponent,
    LeagueSelectorComponent,
    LogobannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

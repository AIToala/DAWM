import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { HttpClientModule } from '@angular/common/http';
import { NewsItemComponent } from './news-item/news-item.component';
import { StandingsComponent } from './standings/standings.component';
import { StatsComponent } from './stats/stats.component';
import { LeagueSelectorComponent } from './league-selector/league-selector.component';
import { LogobannerComponent } from './logobanner/logobanner.component';

//Pages
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { TopscorerComponent } from './topscorer/topscorer.component';
import { TopassisterComponent } from './topassister/topassister.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    StandingsComponent,
    StatsComponent,
    LeagueSelectorComponent,
    LogobannerComponent,
    NewsComponent,
    HomeComponent,
    TopscorerComponent,
    TopassisterComponent,
    FaqComponent,
    TermsComponent
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
    MatExpansionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

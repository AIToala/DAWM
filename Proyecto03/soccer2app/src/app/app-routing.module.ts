import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';
import { TopassisterComponent } from './topassister/topassister.component';
import { TopscorerComponent } from './topscorer/topscorer.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent},
  { path: 'standings', component: StandingsComponent},
  { path: 'topassister', component: TopassisterComponent},
  { path: 'topscorer', component: TopscorerComponent},
  { path: 'FAQ', component: FaqComponent},
  { path: 'terms', component: TermsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

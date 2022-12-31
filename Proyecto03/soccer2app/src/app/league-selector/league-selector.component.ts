import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-league-selector',
  templateUrl: './league-selector.component.html',
  styleUrls: ['./league-selector.component.css']
})
export class LeagueSelectorComponent {
  title = 'Leagues';
  @Output() leagueSelected = new EventEmitter<string>();

  leagues:any[] = [
    {
      name:'World Cup',
      image:'../../assets/leagues/wc.png',
      acronym: 'WC',
      id: '1',
    },
    {
      name:'Champions League',
      image:'../../assets/leagues/cl.png',
      acronym: 'CL',
      id: '2',
    },
    {
      name:'Europa League',
      image:'../../assets/leagues/el.png',
      acronym: 'EL',
      id: '3',
    },
    {
      name:'La Liga',
      image:'../../assets/leagues/ll.png',
      acronym: 'LL',
      id: '140',
    },
    {
      name:'Ligue 1',
      image:'../../assets/leagues/l1.png',
      acronym: 'L1',
      id: '61',
    },
    {
      name:'Bundesliga',
      image:'../../assets/leagues/bl.png',
      acronym: 'BL',
      id: '78',
    },
    {
      name:'Premier League',
      image:'../../assets/leagues/pl.png',
      acronym: 'PL',
      id: '39',
    },
    {
      name:'Serie A',
      image:'../../assets/leagues/sa.png',
      acronym: 'SA',
      id: '135',
    },
  ] 
  onClick(leagueID:string){
    this.leagueSelected.emit(leagueID);
  }
  constructor(){
    this.leagues = this.leagues;
  }


}

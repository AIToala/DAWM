import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-league-selector',
  templateUrl: './league-selector.component.html',
  styleUrls: ['./league-selector.component.css']
})
export class LeagueSelectorComponent {
  title = 'Leagues';
  @Output() leagueSelected = new EventEmitter<string>();
  selectedLeague: string = "WC";

  onClick(leagueID:string){
    this.leagueSelected.emit(leagueID);
  }
  leagues:any[] = [
    {
      name:'World Cup',
      image:'../../assets/leagues/wc.png',
      id: 'WC'
    },
    {
      name:'Champions League',
      image:'../../assets/leagues/cl.png',
      id: 'CL'
    },
    {
      name:'Europa League',
      image:'../../assets/leagues/el.png',
      id: 'EL'
    },
    {
      name:'La Liga',
      image:'../../assets/leagues/ll.png',
      id: 'LL'
    },
    {
      name:'Ligue 1',
      image:'../../assets/leagues/l1.png',
      id: 'L1'
    },
    {
      name:'Bundesliga',
      image:'../../assets/leagues/bl.png',
      id: 'BL'
    },
    {
      name:'Premier League',
      image:'../../assets/leagues/pl.png',
      id: 'PL'
    },
    {
      name:'Serie A',
      image:'../../assets/leagues/sa.png',
      id: 'SA'
    },
  ] 
  ngOnInit() {
    this.selectedLeague = this.leagues[0].id;
  }
  constructor(){
    this.leagues = this.leagues;
  }


}

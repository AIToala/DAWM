import { Component,Input } from '@angular/core';
import { StandingsService } from '../../app/servicios/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent {
  @Input() selectedLeague:string = '1';
  data: any = null;
  groups: boolean = false;
  ngOnInit(){
    this.standingsService.getData(this.selectedLeague).subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.data = this.data.response[0].league;
      if(this.data.country=="World"){
        this.groups = true;
      }else{
        this.groups = false;
      }
    });      
  }
  onLeagueSelected(leagueId:string){
    this.selectedLeague = leagueId;
    this.groups = false;
    this.standingsService.getData(this.selectedLeague).subscribe(data => {
      this.data = data;
      this.data = this.data.response[0].league;
      if(this.data.country=="World"){
        this.groups = true;
      }else{
        this.groups = false;
      }
    });
   
  }
  constructor(private standingsService: StandingsService){}

  
}

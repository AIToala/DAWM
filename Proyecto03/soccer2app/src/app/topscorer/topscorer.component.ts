import { Component,Input } from '@angular/core';
import { TopscorerService } from '../../app/servicios/topscorer.service';

@Component({
  selector: 'app-topscorer',
  templateUrl: './topscorer.component.html',
  styleUrls: ['./topscorer.component.css']
})
export class TopscorerComponent {
  @Input() selectedLeague:string = '1';
  data: any;
  topScorers:any[] = [];

  ngOnInit(){
    this.getFromService(this.selectedLeague);
  }
  onLeagueSelected(leagueId:string){
    this.selectedLeague = leagueId;
    this.getFromService(leagueId);
  }
  constructor(private topscorerService: TopscorerService){}

  getFromService(leagueId: string){
    this.topscorerService.getData(this.selectedLeague).subscribe(data => {
      this.data = data;
      this.data = this.data.response;
      console.log(this.data);
      this.topScorers = [];
      for(let i=0; i<5; i++){
        this.topScorers.push({
          name: this.data[i].player.name,
          photo: this.data[i].player.photo,
          nationality: this.data[i].player.nationality,
          age: this.data[i].player.age,
          team: this.data[i].statistics[0].team.name,
          teamLogo: this.data[i].statistics[0].team.logo,
          position: this.data[i].statistics[0].games.position,
          goals: this.data[i].statistics[0].goals.total
        })
      }
    });
  }
  
}

import { Component,Input } from '@angular/core';
import { TopassisterService } from '../../app/servicios/topassister.service';

@Component({
  selector: 'app-topassister',
  templateUrl: './topassister.component.html',
  styleUrls: ['./topassister.component.css']
})
export class TopassisterComponent {
  @Input() selectedLeague:string = '1';
  data: any=null;
  topAssisters:any[] = [];

  ngOnInit(){
    this.getFromService(this.selectedLeague);
  }
  onLeagueSelected(leagueId:string){
    this.selectedLeague = leagueId;
    this.getFromService(leagueId);
  }
  constructor(private topassisterService: TopassisterService){}

  getFromService(leagueId: string){
    this.topassisterService.getData(this.selectedLeague).subscribe(data => {
      this.data = data;
      this.data = this.data.response;
      this.topAssisters = [];
      for(let i=0; i<5; i++){
        this.topAssisters.push({
          name: this.data[i].player.name,
          photo: this.data[i].player.photo,
          nationality: this.data[i].player.nationality,
          age: this.data[i].player.age,
          team: this.data[i].statistics[0].team.name,
          teamLogo: this.data[i].statistics[0].team.logo,
          position: this.data[i].statistics[0].games.position,
          assists: this.data[i].statistics[0].goals.assists,
          matches: this.data[i].statistics[0].games.appearences
        })
      }
    });
  }
  
}

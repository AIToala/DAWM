import { Component,Input } from '@angular/core';
import { TopassisterService } from '../../app/servicios/topassister.service';

@Component({
  selector: 'app-topassister',
  templateUrl: './topassister.component.html',
  styleUrls: ['./topassister.component.css']
})
export class TopassisterComponent {
  @Input() selectedLeague:string = '1';
  data: any;
  topAssisters:any[] = [];

  //dataScorers.response[0].player.photo
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
      console.log(this.data);
      this.topAssisters = [];
      for(let i=0; i<5; i++){
        this.topAssisters.push({
          name: this.data.response[i].player.name,
          photo: this.data.response[i].player.photo,
          nationality: this.data.response[i].player.nationality,
          age: this.data.response[i].player.age,
          team: this.data.response[i].statistics[0].team.name,
          teamLogo: this.data.response[i].statistics[0].team.logo,
          position: this.data.response[i].statistics[0].games.position,
          assists: this.data.response[i].statistics[0].goals.assists
        })
      }
    });
  }
  
}

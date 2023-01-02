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
  ngOnInit(){
    console.log(this.selectedLeague);
    this.topscorerService.getData(this.selectedLeague).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
  onLeagueSelected(leagueId:string){
    this.selectedLeague = leagueId;
    this.topscorerService.getData(this.selectedLeague).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
  constructor(private topscorerService: TopscorerService){}

}

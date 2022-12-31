import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent {
  @Input() selectedLeague:string = 'WC';

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http:HttpClient) { }

  getData(leagueID: string){
    const apikey = '576a56d04d67566d241abdf338284bd3';
    let url = 'https://v3.football.api-sports.io/standings?';
    const host = 'v3.football.api-sports.io'
    return this.http.get(url+"league="+leagueID+"&season=2022", {
      headers: {
        'x-rapidapi-key': apikey,
        'x-rapidapi-host': host,
      }
    }).pipe(
      map(response => {
        if(Object.entries(response).at(2)?.[1].requests.length > 30){
          throw new Error("No more usage in API left");
        }
      }),
      catchError(error => {
        console.log("Error in API, getting data from local file");
        return this.getDataFromLocal(this.getLeagueAcronym(leagueID));
      })
    );
  }
  getDataFromLocal(leagueAcronym: string){
    return this.http.get<any>('../../assets/data/standings.json')
    .pipe(
      map(response => {
        return response[leagueAcronym];
      }),
      catchError(error => {
        console.log('Error con Local Data');
        return of(null);
      })
    );
  }
  getLeagueAcronym(leagueID: string){
    switch(leagueID){
      case '1':
        return 'WC';
      case '2':
        return 'CL';
      case '3':
        return 'EL';
      case '39':
        return 'PL';
      case '78':
        return 'BL';
      case '135':
        return 'SA';
      case '61':
        return 'L1';
      case '140':
        return 'LL';
      default:
        return 'WC';
    }
  }
}

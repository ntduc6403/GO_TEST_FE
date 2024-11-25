import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Score } from './models/score.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7040/api/scores';

  constructor(private http: HttpClient) { }

  getScores(registrationNumber: string): Observable<Score> {
    return this.http.get<Score>(`${this.apiUrl}/${registrationNumber}`);
  }

  getTop10Students(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top10`);
  }

  getScoreLevelReport(): Observable<any> {
    return this.http.get(`${this.apiUrl}/score-level-report`);
  }
} 
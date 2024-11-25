import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Score } from '../models/score.model';

@Component({
  selector: 'app-search-scores',
  templateUrl: './search-scores.component.html',
  styleUrls: ['./search-scores.component.css']
})
export class SearchScoresComponent {
  registrationNumber: string = '';
  scores: Score | null = null;

  constructor(private dataService: DataService) {}

  searchScores() {
    this.dataService.getScores(this.registrationNumber).subscribe(
      data => {
        this.scores = data;
      },
      error => {
        console.error('Error fetching scores:', error);
        this.scores = null;
      }
    );
  }
} 
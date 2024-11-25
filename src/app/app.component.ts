import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GO_FE';
  scores: any;

  constructor(private dataService: DataService) { }

  getScores(registrationNumber: string) {
    this.dataService.getScores(registrationNumber).subscribe(data => {
      this.scores = data;
    });
  }
}

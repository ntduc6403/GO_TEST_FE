import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  topStudents: any[] = [];
  scoreLevelReport: any;
  
  // Biến cho biểu đồ
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Scores'
    }]
  };
  public barChartType = 'bar' as const;
  public barChartLegend = true;

  public scoreLevelChartData: { [key: string]: ChartData<'bar'> } = {
    toan: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'Toán'
      }]
    },
    vat_li: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'Vật Lý'
      }]
    },
    hoa_hoc: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'Hóa Học'
      }]
    },
    ngu_van: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'Ngữ Văn'
      }]
    },
    ngoai_ngu: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'Ngoại Ngữ'
      }]
    },
    sinh_hoc: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'Sinh Học'
      }]
    },
    lich_su: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'Lịch Sử'
      }]
    },
    dia_li: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'Địa Lý'
      }]
    },
    gdcd: {
      labels: ['8+', '6-8', '4-6', '<4'],
      datasets: [{
        data: [],
        label: 'GDCD'
      }]
    }
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getTop10Students();
    this.getScoreLevelReport();
  }

  getTop10Students() {
    this.dataService.getTop10Students().subscribe(data => {
      this.topStudents = data;
      this.barChartData.labels = this.topStudents.map(student => student.sbd);
      this.barChartData.datasets[0].data = this.topStudents.map(student => student.toan + student.vat_li + student.hoa_hoc);
    });
  }

  getScoreLevelReport() {
    this.dataService.getScoreLevelReport().subscribe(data => {
      this.scoreLevelReport = data;

      // Cập nhật dữ liệu cho từng môn học
      this.scoreLevelChartData['toan'].datasets[0].data = [
        data['toan']["8+"],
        data['toan']["6-8"],
        data['toan']["4-6"],
        data['toan']["<4"]
      ];

      this.scoreLevelChartData['vat_li'].datasets[0].data = [
        data['vat_li']["8+"],
        data['vat_li']["6-8"],
        data['vat_li']["4-6"],
        data['vat_li']["<4"]
      ];

      this.scoreLevelChartData['hoa_hoc'].datasets[0].data = [
        data['hoa_hoc']["8+"],
        data['hoa_hoc']["6-8"],
        data['hoa_hoc']["4-6"],
        data['hoa_hoc']["<4"]
      ];

      this.scoreLevelChartData['ngu_van'].datasets[0].data = [
        data['ngu_van']["8+"],
        data['ngu_van']["6-8"],
        data['ngu_van']["4-6"],
        data['ngu_van']["<4"]
      ];

      this.scoreLevelChartData['ngoai_ngu'].datasets[0].data = [
        data['ngoai_ngu']["8+"],
        data['ngoai_ngu']["6-8"],
        data['ngoai_ngu']["4-6"],
        data['ngoai_ngu']["<4"]
      ];

      this.scoreLevelChartData['sinh_hoc'].datasets[0].data = [
        data['sinh_hoc']["8+"],
        data['sinh_hoc']["6-8"],
        data['sinh_hoc']["4-6"],
        data['sinh_hoc']["<4"]
      ];

      this.scoreLevelChartData['lich_su'].datasets[0].data = [
        data['lich_su']["8+"],
        data['lich_su']["6-8"],
        data['lich_su']["4-6"],
        data['lich_su']["<4"]
      ];

      this.scoreLevelChartData['dia_li'].datasets[0].data = [
        data['dia_li']["8+"],
        data['dia_li']["6-8"],
        data['dia_li']["4-6"],
        data['dia_li']["<4"]
      ];

      this.scoreLevelChartData['gdcd'].datasets[0].data = [
        data['gdcd']["8+"],
        data['gdcd']["6-8"],
        data['gdcd']["4-6"],
        data['gdcd']["<4"]
      ];
    });
  }
}

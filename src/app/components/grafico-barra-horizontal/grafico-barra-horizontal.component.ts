import { Component, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 10
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 5
  //   }
  // ];

// intervalo;


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'Juegos';

  colorScheme = 'nightLights'
  ;

  constructor() {
//     this.intervalo = setInterval( () => {
//   console.log('tick');
//   const newResults = [...this.results];
//   for (const i in this.results) {
//     this.results[i].value = Math.round(Math.random() * 100)
//   }
//   this.results = [...newResults];
// }, 1500)

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
// clearInterval(this.intervalo);

  }

}

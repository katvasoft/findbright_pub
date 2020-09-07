import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-searches-graph-component',
  templateUrl: './searches-graph-component.component.html',
  styleUrls: ['./searches-graph-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchesGraphComponentComponent implements OnInit {

  data = {
  	name: 'Score',
  	data: [
  		[
  			'Mon',
  			10
  		],
  		[
  			'Tue',
  			52
  		],
  		[
  			'Wed',
  			200
  		],
  		[
  			'Thu',
  			334
  		],
  		[
  			'Fri',
  			390
  		],
  		[
  			'Sat',
  			330
  		],
  		[
  			'Sun',
  			220
  		]
  	]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

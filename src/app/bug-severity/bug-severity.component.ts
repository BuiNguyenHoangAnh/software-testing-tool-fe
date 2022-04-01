import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-severity',
  templateUrl: './bug-severity.component.html',
  styleUrls: ['./bug-severity.component.scss']
})
export class BugSeverityComponent implements OnInit {
  description: String = '';
  low: String = '0.0';
  medium: String = '0.0';
  high: String = '0.0';
  critical: String = '0.0';

  constructor() { }

  ngOnInit(): void {
  }

  evaluate() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { SeverityService } from '../severity.service';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-bug-evaluation',
  templateUrl: './bug-evaluation.component.html',
  styleUrls: ['./bug-evaluation.component.scss']
})
export class BugEvaluationComponent implements OnInit {
  description: String = '';
  severity: String = '--';
  type: String = '--';

  constructor(private bugSeverity: SeverityService, private bugType: TypeService) { }

  ngOnInit(): void {
  }

  evaluate() {
    this.bugSeverity.predictSeverity(this.description).subscribe((res:any)=>{
      this.severity = res.result
    })

    this.bugType.predictType(this.description).subscribe((res:any)=>{
      this.type = res.result
    })
  }
}

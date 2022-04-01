import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadTestPlan() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/templates/TestPlan_Template.docx';
    link.download = 'TestPlan_Template.docx';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  downloadTestReport() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/templates/TestReport_Template.docx';
    link.download = 'TestReport_Template.docx';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

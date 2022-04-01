import { Component, OnInit } from '@angular/core';

import jspdf from 'jspdf';
import { findIndex } from 'rxjs';

interface Item {
  id?: string;
  content: string;
  isDone?: boolean;
}

@Component({
  selector: 'app-environment-setup',
  templateUrl: './environment-setup.component.html',
  styleUrls: ['./environment-setup.component.scss']
})
export class EnvironmentSetupComponent implements OnInit {
  checklist: Item[] = []

  inputValue: Item = {
    content: "",
  }
  editValue: boolean = false;
  index = -1;

  constructor() { }

  ngOnInit(): void {
    this.checklist = [{ 'id': '0', 'content': '[Browser] Desktop: Google Chrome, Firefox, Microsoft Edge', 'isDone': false },
    { 'id': '1', 'content': '[Browser] Mobile: Google Chrome, Firefox', 'isDone': false },
    { 'id': '2', 'content': '[Browser] iPad: Google Chrome, Safari', 'isDone': false },
    { 'id': '3', 'content': '[Environment] Environment must be cleaned up', 'isDone': false },
    { 'id': '4', 'content': '[OS] Android from 8.x and up', 'isDone': false },
    { 'id': '5', 'content': '[OS] Windows from 10 and up', 'isDone': false },
    { 'id': '6', 'content': '[OS] iOS from 14.x and up', 'isDone': false }
    ];
  }

  markItemAsDone(item: Item) {
    this.checklist[this.checklist.findIndex(x => x.id === item.id)].isDone = true;
    this.inputValue.content = "";
    this.editValue = false;
  }

  markItemAsNotDone(item: Item) {
    this.checklist[this.checklist.findIndex(x => x.id === item.id)].isDone = false;
    this.inputValue.content = "";
    this.editValue = false;
  }

  editItem(item: Item) {
    this.inputValue.content = item.content;
    this.index = Number(item.id);
    this.editValue = true;
  }

  deleteItem(i: any) {
    this.checklist.splice(this.checklist.findIndex(x => x.id === i), 1)
    this.editValue = false;
    this.inputValue.content = "";
  }

  addNewItem() {
    if (this.inputValue.content != "") {
      let temp: Item = {
        content: ''
      }
      temp.id = this.checklist.length.toString();
      temp.isDone = false;
      temp.content = this.inputValue.content;
      this.checklist.push(temp);
      this.inputValue.content = "";
      this.editValue = false;
    }
  }

  saveItem() {
    if (this.inputValue.content != "") {
      this.inputValue.isDone = false;
      this.checklist[this.checklist.findIndex(x => x.id === this.index.toString())].content = this.inputValue.content;
      this.editValue = false;
      this.inputValue.content = "";
      this.index = -1;
    }
  }

  public downloadAsPDF() {
    const doc = new jspdf("l", "pt", "a4");
    doc.setFontSize(13);

    // const specialElementHandlers = {
    //   '#editor': function (element: any, renderer: any) {
    //     return true;
    //   }
    // };

    // const pdfTable = document.getElementById('checklist') as HTMLElement;

    // doc.html(pdfTable, {
    //   callback: function (doc) {
    //     doc.save();
    //   }
    // });

    let margin_top = 0;
    let margin_left = 20;
    this.checklist.forEach(item => {
      doc.text(item.content, margin_left, margin_top += 20);
    });

    doc.save('checklist.pdf');
  }
}

import {Component, OnInit} from '@angular/core';
import {WidgetlistService} from "./widgetlist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Object [];


  link = {
    home: ["/home"],
    about: ["/about"]

  }

  constructor(private request: WidgetlistService) {}

  ngOnInit() {
    this.request.loadData()
      .subscribe((data) => {
          this.items = data;
      })
  }

  addWidget(name, desc) {

    let widget = {
      name: name,
      desc: desc
    };

    this.request.postData(widget)
      .subscribe(data => {
        this.items.push(data);
      })
  }

  checkWidget(item) {

    this.request.checkData(item)
      .subscribe(data => {

      })

  }




}

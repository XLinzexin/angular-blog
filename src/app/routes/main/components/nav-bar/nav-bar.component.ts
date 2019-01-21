import { Component, OnInit } from "@angular/core";
import { Routes } from "./model";
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 当导航成功结束时执行
        console.log("NavigationEnd:", event);
        for (let route of this.routes) {
          route.selected = event.url === route.path;
        }
      }
    });
  }
  routes: Routes[] = [
    {
      path: "/main/home",
      name: "首页",
      icon: "mail",
      selected: false
    },
    {
      path: "/main/article",
      name: "文章",
      icon: "",
      selected: false
    }
  ];
  ngOnInit() {}
}

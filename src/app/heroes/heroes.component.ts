import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";
console.log(HeroService);

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();

    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnInit() {
    this.getHeroes();
  }
}

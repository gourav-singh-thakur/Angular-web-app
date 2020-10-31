import { Component, OnInit ,Input} from '@angular/core';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 hero:Hero;

  constructor( private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location) { }

  ngOnInit() 
  {
 this.getHero();
  }
  getHero()
  {
    
    const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
 goBack(): void {
    this.location.back();
  }
}
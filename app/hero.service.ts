/**
 * Created by PanaCloud Guru on 6/16/2016.
 */


import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHero() {
    return Promise.resolve(HEROES);
  }
}

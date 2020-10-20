import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this._messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEqual } from 'lodash';
import { shareReplay, BehaviorSubject, mergeMap, distinctUntilChanged, tap, ReplaySubject, Subject, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerFacadeService {
  private eventBus$ = new BehaviorSubject<void>(undefined);
  private cachedCartData$ = this.http.get(
    'https://62c41dc97d83a75e39f0d512.mockapi.io/api/v1/cart'
  );

  cart$ = this.eventBus$.pipe(
    mergeMap(() => this.cachedCartData$),
    distinctUntilChanged((prev, current) => {
      //console.log('prev', prev);
      //console.log('current', current);
      const result = isEqual(prev, current);
      console.log('result', result);
      return result;
    }),
    //shareReplay() //caching 
  );

  constructor(private http: HttpClient) {}

  cacheBust() {
    this.eventBus$.next();
  }
}

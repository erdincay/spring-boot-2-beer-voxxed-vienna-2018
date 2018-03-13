import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers } from "@angular/http";
import { HttpParams } from "@angular/common/http";
import 'rxjs/add/operator/map'
import { Beer } from '../../beer'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent {
  beers: Observable<Beer[]>;
  @Output() onSelected = new EventEmitter<Beer>();

  constructor(private http:Http) {
    this.list();
  }

  list() {
    this.http
        .get(environment.contextRoot + '/rest/beer')
        .map((res: Response) => res.json())
        .subscribe(data => {
          this.beers = data;
        });
  }

  edit(beer: Beer) {
    this.onSelected.emit(beer);
  }

  delete(beer: Beer) {
    this.http.delete(environment.contextRoot + '/rest/beer?beerId=' + beer.id)
        .subscribe(result => this.list());
  }

  add() {
    this.onSelected.emit(<Beer>{});
  }
}

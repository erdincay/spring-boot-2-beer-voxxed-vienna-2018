import { Component, OnInit, ViewChild } from '@angular/core';
import { Beer } from '../../beer';
import { BeerListComponent } from '../beer-list/beer-list.component'
import { BeerDetailComponent } from '../beer-detail/beer-detail.component'

@Component({
  selector: 'app-beer-master',
  templateUrl: './beer-master.component.html',
  styleUrls: ['./beer-master.component.css']
})
export class BeerMasterComponent {
  @ViewChild('beerList') beerList;
  selectedBeer: Beer;

  onSelected(beer: Beer) {
    this.selectedBeer = beer;
  }

  onSubmitted() {
    this.selectedBeer = undefined;
    this.beerList.list();
  }
}

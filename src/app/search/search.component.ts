import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { NetworkCallsService } from '../network-calls.service';
import { Result } from '../result';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private network_service: NetworkCallsService,
    private _location: Location,
    private router: Router,
  ) { }

  results: Result[];
  temp: String[];
  noResultFound: Boolean = false;

  ngOnInit() {
  }

  sendMsg(query: string){
    console.log(query);
    this.noResultFound = false;
    this.results = [];
    this.network_service.getSearchResults(query, 'name').subscribe(data =>{
      // console.log(data.length);
      if (data.length == 0){
        this.noResultFound = true;
      }
      data.forEach(item => {
        this.results.push(item);
      })
    })
    console.log("Sent request for name");
    this.network_service.getSearchResults(query, 'tag').subscribe(data =>{
      data.forEach(item => {
        if (this.results.find(this.listEqual, item.path)){
          return;
        };
        this.results.push(item);
      })
    })
    console.log("Sent request for tag");
    this.network_service.getSearchResults(query, 'text').subscribe(data =>{
      data.forEach(item => {
        if (this.results.find(this.listEqual, item.path)){
          return;
        };
        this.results.push(item);
      })
    })
    console.log("Sent request for text");
    this.network_service.getSearchResults(query, 'similar').subscribe(data =>{
      console.log(data.length);
      data.forEach(item => {
        this.results.push(item);
      })
    })
  }

  listEqual(value: Result){
    if(value.path == this.toString()){
      return true;
    }
    return false
  }

  goBack(){
    this._location.back();
  }

  goTo(id: number){
    console.log(id)
    this.router.navigate(['/file', id]);
  }
}

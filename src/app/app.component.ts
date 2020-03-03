import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkCallsService } from './network-calls.service';
import { Result } from './result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'documentFinderAngular';

  constructor(private network_service: NetworkCallsService) { }

  // General Variables/Functions

  page: String = "home";

  goTo(destination: String){
    this.page = destination;
  }

  // Home Variables/Functions

  addDirectory(){
    this.page = "add";
  }

  searchKeyword(){
    this.page = "search"
  }

  // Search Variables/Functions

  noResultFound: Boolean = false;
  resultFound: Boolean = false;
  results: Result[]
  
  sendMsg(query: string){
    console.log(query);
    this.noResultFound = false;
    this.resultFound = false;
    this.results = [];
    this.network_service.getSearchResults(query, 'name')
    .subscribe(data =>{
      data.forEach(item => {
        this.results.push(item);
      })
    })
    this.network_service.getSearchResults(query, 'tag').subscribe(data =>{
      data.forEach(item => {
        if (this.results.find(this.listEqual, item.path)){
          return;
        };
        this.results.push(item);
      })
    })
    this.network_service.getSearchResults(query, 'text').subscribe(data =>{
      data.forEach(item => {
        if (this.results.find(this.listEqual, item.path)){
          return;
        };
        this.results.push(item);
      })
    })
    this.network_service.getSearchResults(query, 'similar').subscribe(data =>{
      console.log(data.length);
      if (this.results.length == 0){
        this.noResultFound = true;
        this.resultFound = false;
      }
      else{
        this.noResultFound = false;
        this.resultFound = true;
      }
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

  getFileInfo(id: number){
    this.page = "tag"
    this.id = id;
    this.network_service.getFileInfo(id)
    .subscribe(response =>{
      this.fileInfo = response;
    })
  }

  // Tag Variables/Functions

  id: number;
  private sub: any;
  fileInfo: Result;

  addTag(tag: String, item: Result){
    this.network_service.addTag(tag, item.path) 
    .subscribe(response => {
      if (response) {
        this.fileInfo.tags += " " + tag;
        console.log("Tag added successfully");
      }
      else{
        console.log("Failed due to response: " + response);
      }
    })
  }

  // Add Variables/Functions

  loading: Boolean = false;
  done: Boolean = false
  loadingDB: Boolean = false;
  doneDB: Boolean = false;

  trainPath(path: string){
    this.loading = true;
    this.done = false;
    console.log(path)
    this.network_service.addTrainPath(path)
    .subscribe(data =>{
      console.log(data)
      this.loading = false;
      this.done = true;
    });
  }

  trainPathDB(path: string){
    this.loadingDB = true;
    this.doneDB = false;
    console.log(path)
    this.network_service.addTrainPathDB(path)
    .subscribe(data =>{
      console.log(data)
      this.loadingDB = false;
      this.doneDB = true;
    });
  }
}

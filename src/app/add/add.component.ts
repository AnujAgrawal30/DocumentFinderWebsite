import { Component, OnInit } from '@angular/core';
import { NetworkCallsService } from '../network-calls.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private network_service: NetworkCallsService,
    private _location: Location
  ) { }

  loading: Boolean = false;
  done: Boolean = false
  loadingDB: Boolean = false;
  doneDB: Boolean = false

  ngOnInit() {
  }
  
  goBack(){
    this._location.back();
  }

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

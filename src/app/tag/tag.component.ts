import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkCallsService } from '../network-calls.service';
import { Result } from '../result';
import { Location } from '@angular/common'

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private network_service: NetworkCallsService,
    private _location: Location,
  ) { }

  id: number;
  private sub: any;
  fileInfo: Result;

  ngOnInit() {
    this.sub = this.route.params
    .subscribe(params =>{
      this.id = +params['id'];
    })
    this.network_service.getFileInfo(this.id)
    .subscribe(response =>{
      this.fileInfo = response;
    })
  }

  getInfo(){
    this.network_service.getFileInfo(this.id)
    .subscribe(response => {
      console.log(response);
      this.fileInfo = response;
    })
  }

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

  goBack(){
    this._location.back()
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

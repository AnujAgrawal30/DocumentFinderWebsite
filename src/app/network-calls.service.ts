import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class NetworkCallsService {

  constructor(private http: HttpClient) { }

  BASE_URL = "http://127.0.0.1:8000";

  getSearchResults(query: string, method: string): Observable<Result[]>{
    return this.http.get<Result[]>(this.BASE_URL + '/search', {params:{
      query: query,
      method: method
    }})
  }

  addTrainPath(path: string){
    return this.http.get<any>(this.BASE_URL + '/train', {params:{
      path: path,
    }})
  }

  addTrainPathDB(path: string){
    return this.http.get<any>(this.BASE_URL + '/train', {params:{
      path: path,
    }})
  }

  getFileInfo(id: number): Observable<Result>{
    return this.http.get<Result>(this.BASE_URL + "/file", {params: {
        id: id.toString(),
      }});
  }

  test(){
    this.http.get<any>(this.BASE_URL)
    .subscribe(data =>{
      console.log(data)
    })
  }

  addTag(tag: String, filepath: String){
    return this.http.post(this.BASE_URL + '/tags', {
      filepath: filepath,
      tags: tag,
    })
  }
}

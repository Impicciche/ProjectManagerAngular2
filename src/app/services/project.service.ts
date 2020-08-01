import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url_search_project="http://localhost:8000/project";

  constructor(private http:HttpClient) { 

  }

  searchProject(project:string){
  }
}

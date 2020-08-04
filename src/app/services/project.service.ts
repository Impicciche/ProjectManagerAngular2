import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url_create_project="http://localhost:8000/api/project/";
  url_search_project="http://localhost:8000/api/project/search";
  url_all_projects="http://localhost:8000/api/project";

  constructor(private http:HttpClient) { 

  }
  getAllProjects(){
    return this.http.get(this.url_all_projects);
  }
  searchProject(project:string){
    return this.http.post(this.url_search_project,{search: project});
  }

  createProject(p:Project){
    return this.http.post(this.url_search_project,p);
  }
}

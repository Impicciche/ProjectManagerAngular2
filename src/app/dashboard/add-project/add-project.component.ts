import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  addProject = new FormGroup({
    title : new FormControl(''),
    description : new FormControl(''),
    status : new FormControl(''),
    client: new FormGroup({
      company: new FormControl(''),
      tva: new FormControl(''),

    })
  });

  newClient:boolean = false;

  constructor(private ps:ProjectService) { }

  ngOnInit(): void {
  }

  createProject(){
    let p = new Project();

    

    p.title = this.addProject.get('title').value;
    p.description = this.addProject.get('description').value;
    p.status = this.addProject.get('status').value;
    p.client_id = this.addProject.get('client_id').value;

    this.ps.createProject(p);
  }
  createClient(){
    this.newClient = true;
  }
}

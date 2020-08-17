import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { ClientService } from 'src/app/services/client-service';
import { Project } from 'src/app/model/project';
import { Client } from 'src/app/model/client';

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

  constructor(private ps:ProjectService, private cs:ClientService) { }

  ngOnInit(): void {
  }

  createProject(){
    let p = new Project();
    let c = new Client();

    

    p.title = this.addProject.get('title').value;
    p.description = this.addProject.get('description').value;
    p.status = this.addProject.get('status').value;
    if(this.newClient){
      c = this.addProject.get('client').value;

      this.cs.createClient(c).subscribe((data) => {
        console.log(data);
      });
    }

    this.ps.createProject(p);
  }
  createClient(){
    this.newClient = true;
  }
}

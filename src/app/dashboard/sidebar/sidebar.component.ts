import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/model/project';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  projects:Project[];
  searchSideBar = new FormControl('');

  constructor(private ps:ProjectService) { }
  ngOnInit() {
    this.ps.getAllProjects().subscribe((data:Project[]) => {
      this.projects = data;
    });
  }

  searchProject(){
    this.ps.searchProject(this.searchSideBar.value).subscribe((data:Project[])=>{
      this.projects=data;
    });
  }
}

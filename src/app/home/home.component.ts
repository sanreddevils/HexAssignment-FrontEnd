import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {SoftskilldataService} from '../softskilldata.service';
import {SoftSkillsModel} from '../soft-skill.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  softSkills:SoftSkillsModel[]
  constructor(private route: ActivatedRoute,private _service:SoftskilldataService,private router: Router) {}

  ngOnInit() {

   this._service.getSkills(1).subscribe(res => this.softSkills = res);

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() projectData!: IProject;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  showPersonal: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  //expand listeners
  togglePersonalBadge = () => {
    console.log(this.showPersonal);

    this.showPersonal = !this.showPersonal;
  };
}

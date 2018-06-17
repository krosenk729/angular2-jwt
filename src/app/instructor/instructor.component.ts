import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Instructor } from './instructor';
import * as jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

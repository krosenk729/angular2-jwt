import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { InstructorService } from './instructor.service';
import { Instructor } from './instructor';
import 'rxjs';
import * as md5 from 'md5';

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
    instructors: Instructor[];
    errorMessage: string;

    constructor(private instService: InstructorService, private auth: AuthService) { }

    ngOnInit() {
        this.getInstructors();
    }

    getInstructors(){
        this.instService.getInstructors()
            .map(response => response.json())
            .subscribe(data => this.instructors = data,
                error => this.errorMessage = error.json().message
            );
    }

}

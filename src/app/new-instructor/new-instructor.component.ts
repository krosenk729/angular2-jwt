import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { InstructorService } from '../instructor/instructor.service';
import { Instructor } from '../instructor/instructor';
import 'rxjs';


@Component({
    selector: 'app-new-instructor',
    templateUrl: './new-instructor.component.html',
    styleUrls: ['./new-instructor.component.css']
})
export class NewInstructorComponent implements OnInit {
    instructor: Instructor;

    constructor(private instService: InstructorService, private router: Router, private location: Location) { }

    ngOnInit() {
    }

    addInstructor(data){
        this.instService.addInstructor(data)
            .map(response => response.json())
            .subscribe(data => this.router.navigate(['instructor']),
                error => console.log(error));
    }

    goBack(){
        this.location.back();
    }

}

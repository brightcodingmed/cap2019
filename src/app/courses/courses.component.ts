import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  test = "my test";
  titleForMyImage = `image alt ${this.test}`;
  image = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/NoO0UpFmSlqYIujQ6Gta";
  editable = false;

  myCourse = {
    title: '',
    price: 0,
    published: new Date()
  };

  courses = [
    { title: 'Angular', price: 11, published: new Date() },
    { title: 'ReactJS', price: 23, published: new Date() },
    { title: 'VueJS', price: 21, published: new Date() }
  ];

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.courses = [this.myCourse, ...this.courses]
   this.initCourse();
  }

deleteCourse(index) {
 
  this.courses.splice(index, 1);
}

editCourse(course) {
  this.editable = true;
  this.myCourse = course;
}

updateCourse() {
    this.initCourse();
}

initCourse() {
  this.editable = false;
  this.myCourse = {
    title: '',
    price: 0,
    published: new Date()
  };
}

}

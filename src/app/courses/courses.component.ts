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
    published: new Date(),
    vote: {like: 0, dislike: 0}
  };

  courses = [
    { vote: {like: 10, dislike: 1}, title: 'Angular', price: 11.5978, published: new Date() },
    { vote: {like: 12, dislike: 11}, title: 'ReactJS', price: 23.1955, published: new Date() },
    { vote: {like: 1, dislike: 14}, title: 'VueJS', price: 21.8323, published: new Date() }
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
    published: new Date(),
    vote: {like: 0, dislike: 0}
  };
}


takeVote(data, course) {
  console.log(data, course)
  if(data.type) {
    course.vote.dislike = data.value
  }
  else {
    course.vote.like = data.value
  }
}

}

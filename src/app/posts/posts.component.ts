import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  etat = 'add';
  showForm = false;
  myPost = {
    title: '',
    body: ''
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  afficheBloc() {
    this.showForm = !this.showForm;

  }

  getPosts() {
     this.postService.getAll().subscribe((response: any[]) => {
       this.posts = response;
       console.log(response);
     })
  }


  createPost() {
    this.postService.create(this.myPost).subscribe(response => {
      this.posts.unshift(response);

      this.myPost = {
        title: '',
        body: ''
      }
    })
  }

  deletePost(id, index) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

        this.postService.delete(id).subscribe(() => {
          this.posts.splice(index, 1);
       })

        Swal.fire({
          title: 'Deleted !',
          text: 'this post is deleted',
          timer: 3000
        })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })
   
      
    

    
  }

  editePost(post) {
    this.etat = 'update';
    this.myPost = post;
  }

  updatePost() {
    this.postService.update(this.myPost).subscribe(res => {
      this.myPost = {
        title: '',
        body: ''
      }
      this.etat = 'add';
    })
  }

}

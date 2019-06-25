import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  create(post) {
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", post);
  }

  delete(id) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  update(post) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
  }
}

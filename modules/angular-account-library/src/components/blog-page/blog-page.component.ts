import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { blogs } from './mock-data-blog-page';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  listBlog = blogs;
  query = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}

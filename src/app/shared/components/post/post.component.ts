import { Component, Input, OnInit } from '@angular/core'
import { IPost } from '../../interfaces/post.interface'

@Component({
  selector: 'ns-app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: IPost;

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Use the 'ngOnInit' handler to initialize data for the view.
  }

  onLouis() {}

  onLikePost() {}
}

import { Input, Component, OnInit } from '@angular/core'

@Component({
  selector: 'ns-app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() story: number;

  constructor() { }

  ngOnInit(): void {}
}

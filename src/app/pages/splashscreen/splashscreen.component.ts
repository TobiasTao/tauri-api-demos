import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss']
})
export class SplashscreenComponent implements OnInit {
  code = 'splashscreen_html("<div>The app is loading...</div>")';

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelperActiveService } from './services/helpers/helper-active';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WEB';

  constructor(private helper: HelperActiveService, private _router: Router){}

  public onRouterOutletActivate(event: any) {
    this.helper.changeMessage(event.constructor.name);
  }

  displayHeadFoot(): boolean {
    return this._router.url == '/notFound'
      ? false
      : true;
  }
}

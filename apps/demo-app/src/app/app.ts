import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CopyToClipboardDirective} from "@tomaszplawecki/ngx-lite-tools";

@Component({
  imports: [RouterModule, CopyToClipboardDirective],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'demo-app';

  text = 'Skopiuj mnie!';
  copied = false;

}

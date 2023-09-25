import { AfterViewInit, Component } from '@angular/core';

import { AppModule } from './app.module';
import { SwUpdate } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  public versao = AppModule.versao;
  public httpRequest = '';

  constructor(private sw: SwUpdate, private httpClient: HttpClient) {
    window.setInterval(async () => {
      if(await (sw.checkForUpdate()) === true) {
        await sw.activateUpdate();
        window.location.reload();
        console.log(this.httpRequest);
      }
    }, 10_000)
  }

  async ngAfterViewInit(): Promise<void> {
    this.httpRequest = await firstValueFrom(this.httpClient.get<string>('api'));
  }
}

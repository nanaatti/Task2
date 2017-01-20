import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http"

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  private vastaus: any = {}; // property
  private apinVastaus: any = [];
  private testiVastaus: any = [];

  constructor(private http: Http) {
  }

  private getJson() {
    this.http.get('tsconfig.json')
    .subscribe(                       // .subscribe palauttaa Response-tyypin objektin
      (res: Response) => {              
      const json = res.json();
      this.vastaus = json.compilerOptions;
      console.log(this.vastaus);
      }
    );
  }

  private getTyopaikatApi() {
    this.http.get('http://gis.vantaa.fi/rest/tyopaikat/v1')
    .subscribe(
      (res: Response) => {
        this.apinVastaus = res.json();
        console.log(this.apinVastaus);
      }
    );
  }

  
  private getOpenAhjoApi() {
    this.http.get('https://dev.hel.fi/paatokset/v1/')
    .subscribe(
      (res: Response) => {
        this.testiVastaus = res.json();
        console.log(this.testiVastaus);
      }
    )
  }

  private getJklApi() {
    this.http.get('http://jkljobs.herokuapp.com/api/v1/jobs')
    .subscribe(
      (res: Response) => {
        this.testiVastaus = res.json();
        console.log(this.testiVastaus);
      }
    )
  }

  


  ngOnInit() {
    this.getJson();
    this.getJklApi();
  }

}

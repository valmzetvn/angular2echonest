import { Injectable } from 'angular2/angular2';
import { Jsonp } from 'angular2/http';


@Injectable()
export class RSSService {
  private url: string;
  private format: string;

  private jsonp: Jsonp;

  constructor(Jsonp: Jsonp) {
    this.url = 'http://www.winbeta.org/feed';
    this.format = 'json';

    this.jsonp = Jsonp;
  }

  fetch() {
    let url = this.url + '/' + this.format + '?callback=JSONP_CALLBACK&';
    return this.jsonp.get(url)
      .map((res) => {
        console.log(res);
        return res.json();
      });
  }

  // getArtistData(name) {
  //   let endpoint = 'artist/profile?';
  //   let url = this.url + endpoint + '&name=' + name + '&format=' + this.format + '&bucket=blogs&bucket=images&bucket=genre&bucket=reviews&bucket=news';
  //   return this.http.get(url)
  //     .map(res => res.json())
  // }


  // artistSearch (name) {
  //         let endpoint = 'artist/suggest?';
  //         let url = this.url + endpoint + '&results=6' + '&name=' + name + '&format=' + this.format;
  //         return this.http.get(url)
  //             .map(function (res) { return res.json(); });
  // }

  // getArtistBio (name) {
  //         var endpoint = 'artist/biographies?';
  //         let url = this.url + endpoint + '&name=' + name + '&format=' + this.format + '&results=1&start=6';
  //         return this.http.get(url)
  //             .map(res => res.json())
  //             .map(res => res.response.biographies);
  // }
}
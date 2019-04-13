import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public API_URL = '//localhost:8080';
  public ITEMS_API = this.API_URL + '/items';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {

    return this.http.get(this.API_URL + '/getItems');
  }

  get(id: string) {
    return this.http.get(this.ITEMS_API + '/' + id);
  }

  save(item: any): Observable<any> {
    let result: Observable<Object>;
    if (item['href']) {
      result = this.http.put(item.href, item);
    } else {
      result = this.http.post(this.ITEMS_API, item);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}

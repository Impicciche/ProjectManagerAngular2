import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url_createClient="http://localhost:8000/api/client";
  constructor(private http: HttpClient) { }

  createClient(client:Client){
    return this.http.post(this.url_createClient,client);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CountryListService  {
    constructor(private http: HttpClient) {}

    public getCountryList(): Observable<string[]> 
     {
        return this.http.get<string[]>("https://restcountries.com/v3.1/all");
    }
}
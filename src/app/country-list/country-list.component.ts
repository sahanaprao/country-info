import { Component, OnInit, signal } from "@angular/core";
import { CountryListService } from "./country-list.service";

@Component({
    selector: "country-list",
    templateUrl: "./country-list.component.html",
    styleUrls: ["./country-list.component.scss"]
})
export class CountryListComponent implements OnInit {
    public countries = signal([]);
    constructor(private countryListService:CountryListService) {}

    public ngOnInit(): void {
        this.countryListService.getCountryList().subscribe((data) => {
           this.countries.set(data);
        });
    }
}
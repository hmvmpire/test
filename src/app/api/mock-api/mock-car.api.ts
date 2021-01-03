import { Cars, footerLinks } from './../mock-data/data';
import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { CarApi } from '../base/cars.api';
import { BodyTypes, CarCompanies, searchResult } from '../mock-data/data';

@Injectable()
export class MockCarApi extends CarApi {
    getFooterLinks(slug: string): Observable<String[]> {
        return of(footerLinks)
    }
    getCars(slug: string): Observable<Vehicle[]> {
        return of(Cars)
    }
    getCompanies(slug: string): Observable<Vehicle[]> {
        return of(CarCompanies)
    }
    getTypes(slug: string): Observable<Vehicle[]> {
        return of(BodyTypes)
    }
    getSearchResult(slug: string): Observable<Vehicle[]> {
        return of(searchResult)
    }
}
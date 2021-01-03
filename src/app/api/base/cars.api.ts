import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/interfaces/vehicle';


export abstract class CarApi {
    abstract getSearchResult(slug: string): Observable<Vehicle[]>;
    abstract getTypes(slug: string): Observable<Vehicle[]>;
    abstract getCompanies(slug: string): Observable<Vehicle[]>;
    abstract getCars(slug: string): Observable<Vehicle[]>;
    abstract getFooterLinks(slug: string): Observable<String[]>;
}
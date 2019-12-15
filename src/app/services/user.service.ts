
import { HttpClient } from '@angular/common/http'
import { IUser } from '../models/IUser'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'


export class USerService{
    constructor(private http: HttpClient) {
       
    }
    public getUsers = () : Observable<IUser[]> => {
       return this.http.get<IUser[]>("")
               
    }
 
}
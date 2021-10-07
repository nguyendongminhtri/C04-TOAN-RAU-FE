import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {SignInForm} from '../model/SignInForm';
import {JwtResponse} from '../model/JwtResponse';
import {Category} from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//API_LOCAL
//   private API_SIGNUP = environment.API_LOCAL+'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';
  private API_CATEGORY = environment.API_LOCAL + 'category';
  //API_SERVER
  private API_SIGNUP =environment.API_SERVER+'signup';
  constructor(private http: HttpClient) { }
  signUp(signUp: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signUp)
  }
  signIn (signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN, signIn)
  }
  createCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.API_CATEGORY, category);
  }
}

import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { CommonAlertService } from './common-alert.service';
import { APIResponse } from 'src/app/model/interfaces/api-response';
import { LocalStorageDataModel } from 'src/app/model/enum/local-storage-data-model';
// import { LoaderService } from './loader.service';
import { GlobalUtility } from 'src/app/utility/global-utility';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(
    private http: HttpClient,
    private globalUtility: GlobalUtility,
    private _commonAlertService: CommonAlertService,
    // private _loaderService: LoaderService
  ) { }

  get(url: string, query: Object, requiresAuth = false, header?: HttpHeaders): Observable<APIResponse> {
    // this._loaderService.display(true);
    let headers = this.addCustomHeaders(false, requiresAuth, header);
    return this.http.get<APIResponse>(url, { headers, observe: 'response' }).pipe(
      map(res => this.checkResponse(res)),
      catchError(this.errorHandler.bind(this))
    );
  }

  post(url: string, body: any, requiresAuth = false, isUrlEncoded = false, header?: HttpHeaders): Observable<APIResponse> {
    // this._loaderService.display(true);
    let headers = this.addCustomHeaders(isUrlEncoded, requiresAuth, header);
    return this.http.post<APIResponse>(url, body, { headers, observe: 'response' }).pipe(
      map(res => this.checkResponse(res)),
      catchError(this.errorHandler.bind(this))
    );
  }

  put(url: string, body: any, isUrlEncoded = false, requiresAuth = false, header?: HttpHeaders): Observable<APIResponse> {
    // this._loaderService.display(true);
    let headers = this.addCustomHeaders(isUrlEncoded, requiresAuth, header);
    return this.http.put<APIResponse>(url, body, { headers, observe: 'response' }).pipe(
      map(res => this.checkResponse(res)),
      catchError(this.errorHandler.bind(this))
    );
  }

  delete(url: string, query: Object, isUrlEncoded = false, requiresAuth = false, header?: HttpHeaders): Observable<APIResponse> {
    // this._loaderService.display(true);
    let headers = this.addCustomHeaders(false, requiresAuth, header);
    let searchParams = this.addSearchParams(query);
    return this.http.delete<APIResponse>(url, { headers, observe: 'response', params: searchParams }).pipe(
      map(res => this.checkResponse(res)),
      catchError(this.errorHandler.bind(this))
    );
  }

  private addCustomHeaders(isUrlEncoded = false, requiresAuth = false, customHeaders?: HttpHeaders): HttpHeaders {
    let headers: HttpHeaders;
    if (isUrlEncoded) {
      headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    } else {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
    }
    if (requiresAuth) headers = headers.append('authorization', this.globalUtility.getDataFromLocalStorage(LocalStorageDataModel.AUTHORIZATION_KEY));
    if (customHeaders) customHeaders.keys().forEach(key => headers = headers.append(key, customHeaders.get(key)));
    return headers;
  }

  private addSearchParams(customParam: Object) {
    let search: HttpParams;
    for (const key in customParam) search = search.append(key, customParam[key]);
    return search;
  }

  private checkResponse(response: HttpResponse<any>): APIResponse {
    // this._loaderService.display(false);
    if (response.headers) {
      let authorization = response.headers.get('authorization');
      if (authorization) {
        this.globalUtility.setDataOnLocalStorage(LocalStorageDataModel.AUTHORIZATION_KEY, authorization);
      }
    }
    if (response.body !=null && !response.body.success) this._commonAlertService.errorToast(response.body.reason);
    else {
      return response.body;
    }
  }

  private errorHandler(error: HttpErrorResponse) {
    // this._loaderService.display(false);
    let errorMsg = '';
    if (error) {
      if (error.error instanceof ErrorEvent) errorMsg = 'There is a problem with the service. We are notified & working.Please try again later.';
      else if (error.status === 403) errorMsg = 'Email address or password is wrong.';
      else errorMsg = 'Internal Server Error';
      this._commonAlertService.errorToast(errorMsg);
    }
    return of();
  }


}
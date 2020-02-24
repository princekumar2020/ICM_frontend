import { Injectable } from '@angular/core';
import { HttpHelperService } from './common/http-helper.service';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/interfaces/api-response';
import { IcmApiRoutes } from 'src/app/model/classes/IcmApiRoutes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpHelperSerive : HttpHelperService) { }

  userLogin(reqbody):Observable<APIResponse> {
    return this._httpHelperSerive.post(IcmApiRoutes.getLoginUrl(), reqbody)
  }

newPage(reqbody):Observable<APIResponse>{
  return this._httpHelperSerive.post(IcmApiRoutes.getNewPageUrl(),reqbody)
}

updatePage(reqbody ,id):Observable<APIResponse>{
  return this._httpHelperSerive.put(IcmApiRoutes.getNewPageUrl(),reqbody,id)
}

}

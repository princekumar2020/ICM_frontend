import { Injectable } from '@angular/core';
import { LocalStorageDataModel } from '../model/enum/local-storage-data-model';

@Injectable({
    providedIn: 'root'
})
export class GlobalUtility {

    constructor() { }

    setDataOnLocalStorage(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    getDataFromLocalStorage(key: string): string {
        if (localStorage.getItem(key) != 'undefined' && localStorage.getItem(key) != null) return localStorage.getItem(key);
        return '';
    }

    removeFromLocalStorage(key: string) {
        localStorage.removeItem(key);
    }

    isLoggedIn(): boolean {
        if (localStorage.getItem(LocalStorageDataModel.AUTHORIZATION_KEY) != 'undefined' && localStorage.getItem(LocalStorageDataModel.AUTHORIZATION_KEY) != null) return true;
        else return false;
    }

}
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class CommonAlertService {

    constructor(private snackBar: MatSnackBar) {
    }

    successToast(message: string) {
        this.snackBar.open(message, 'Dismiss', { panelClass:'success', duration:5000 });
        // this.snackBar.open(message,'Dismiss',{duration:5000});
    }

    errorToast(message: string) {
        this.snackBar.open(message, 'Dismiss', { panelClass: 'danger', duration: 5000 });
    }

    warningToast(message: string) {
        // this.snackBar.open(message,'Dismiss',{duration:5000});
    }

    infoToast(message: string) {
        // this.snackBar.open(message,'Dismiss',{duration:5000});
    }

}
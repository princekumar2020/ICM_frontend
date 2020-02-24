import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { from } from 'rxjs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

const Material = [MatSnackBarModule,  MatDatepickerModule,
  MatNativeDateModule,MatSelectModule, MatFormFieldModule, MatInputModule ]


@NgModule({
  imports: [ Material],
  exports: [ Material]
})
export class MaterialModule { }

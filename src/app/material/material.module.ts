import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule
  ]
})
export class MaterialModule {
}

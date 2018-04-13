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
  MatDatepickerModule
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
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {
}

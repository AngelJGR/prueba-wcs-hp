import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

const MaterialComponents = [
  MatSelectModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }

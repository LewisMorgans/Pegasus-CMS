import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
// import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule } from '@angular/material';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    NgxSmartModalModule.forChild(),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [DataTableComponent]
})
export class SharedDataTableModule { }

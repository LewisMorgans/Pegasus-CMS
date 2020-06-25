import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings-router.module';
import { BookingsComponent } from './bookings.component';
import { SharedDataTableModule } from 'src/app/shared/components/data-table/shared-data.module';

@NgModule({
  declarations: [BookingsComponent],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedDataTableModule
  ]
})
export class BookingsModule { }

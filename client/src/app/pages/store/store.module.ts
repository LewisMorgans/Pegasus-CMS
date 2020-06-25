import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { SharedDataTableModule } from 'src/app/shared/components/data-table/shared-data.module';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedDataTableModule
  ]
})
export class StoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilRoutingModule } from './util-routing.module';
import { AllownumberDirective } from './directives/allownumber.directive';
import { DecimalnumberDirective } from './directives/decimalnumber.directive';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PreLoadTableComponent } from './pre-load-table/pre-load-table.component';


@NgModule({
  declarations: [
    AllownumberDirective,
    DecimalnumberDirective,
    BreadcrumsComponent,
    PaginationComponent,
    PreLoadTableComponent
  ],
  imports: [
    CommonModule,
    UtilRoutingModule
  ],
  exports: [
    AllownumberDirective,
    DecimalnumberDirective,
    BreadcrumsComponent,
    PaginationComponent,
    PreLoadTableComponent
  ]
})
export class UtilModule { }

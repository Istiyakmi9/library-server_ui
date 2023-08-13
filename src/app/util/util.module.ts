import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilRoutingModule } from './util-routing.module';
import { AllownumberDirective } from './directives/allownumber.directive';
import { DecimalnumberDirective } from './directives/decimalnumber.directive';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AllownumberDirective,
    DecimalnumberDirective,
    BreadcrumsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    UtilRoutingModule
  ],
  exports: [
    AllownumberDirective,
    DecimalnumberDirective,
    BreadcrumsComponent,
    PaginationComponent
  ]
})
export class UtilModule { }

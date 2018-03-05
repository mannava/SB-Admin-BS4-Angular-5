import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TablesRoutingModule} from './tables-routing.module';
import {TablesComponent} from './tables.component';
import {PageHeaderModule} from './../../shared';
import {QueryBuilderModule} from 'angular2-query-builder';
import {FormsModule} from '@angular/forms';
import {Ng2DatetimePickerModule} from 'ng2-datetime-picker';
import {MomentModule} from 'angular2-moment';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, QueryBuilderModule, FormsModule, Ng2DatetimePickerModule, MomentModule],
    declarations: [TablesComponent]
})
export class TablesModule {
}

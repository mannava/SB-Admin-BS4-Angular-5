import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    Ng2TableModule, NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective,
    NgTableSortingDirective
} from 'ng2-table/ng2-table';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TabsModule} from "ng2-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        Ng2TableModule,
        PaginationModule,
        FormsModule,
        PaginationModule,
        TabsModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class DashboardModule {}

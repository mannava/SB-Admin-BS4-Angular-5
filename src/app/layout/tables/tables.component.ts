import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {QueryBuilderConfig} from 'angular2-query-builder';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    query = {
        condition: 'and',
        rules: [
            {field: 'EI_TRXN_TYPE', operator: '=', value: ''},
            {field: 'EI_TIMESTAMP', operator: '=', value: ''},
            {field: 'TRXN_ID', operator: '=', value: ''},
            {field: 'ORD_ID', operator: '=', value: ''},
            {field: 'SALESDOCNUM', operator: '=', value: ''},
            {field: 'DELIVERYDOCNUM', operator: '=', value: ''},
            {field: 'DCNUMBER', operator: '=', value: ''}
        ]
    };

    /*EI_TRXN_TYPE	EI_TIMESTAMP	TRXN_ID	ORD_ID	SALESDOCNUM	DELIVERYDOCNUM	DCNUMBER

*/
    config: QueryBuilderConfig = {
        fields: {
            EI_TRXN_TYPE: {name: 'EI_TRXN_TYPE', type: 'number'},
            EI_TIMESTAMP: {name: 'EI_TIMESTAMP', type: 'number'},
            TRXN_ID: {name: 'TRXN_ID', type: 'number'},
            ORD_ID: {name: 'ORD_ID', type: 'number'},
            SALESDOCNUM: {name: 'SALESDOCNUM', type: 'number'},
            DELIVERYDOCNUM: {name: 'DELIVERYDOCNUM', type: 'number'},
            DCNUMBER: {name: 'DCNUMBER', type: 'number'}
        }
    };

    /*    classNames: { [key: string]: string } = {
            removeIcon: 'fa fa-minus',               // Font-Awesome
            addIcon: 'fa fa-plus',                   // Font-Awesome
            button: 'btn',                           // Bootstrap
            buttonGroup: 'btn-group',                // Bootstrap
            switchGroup: 'btn-group',                // Bootstrap
            queryTree: 'q-tree',                     // DEFAULT
            queryItem: 'q-item',                     // DEFAULT
            queryRule: 'q-rule',                     // DEFAULT
            queryRuleSet: 'q-ruleset',               // DEFAULT
            invalidRuleset: 'alert alert-danger',    // Bootstrap
            emptyWarning: '',                        // Bootstrap
            fieldControl: 'form-control',            // Bootstrap
            operatorControl: 'form-control',         // Bootstrap
            inputControl: 'form-control'             // Bootstrap
        };*/

    constructor() {
    }

    ngOnInit() {
    }
}

import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../../router.animations';
import {QueryBuilderConfig} from 'angular2-query-builder'

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
            {field: 'age', operator: '<=', value: 'Bob'},
            {field: 'gender', operator: '>=', value: 'm'}
        ]
    };

    config: QueryBuilderConfig = {
        fields: {
            age: {name: 'Age', type: 'number'},
            gender: {
                name: 'Gender',
                type: 'category',
                options: [
                    {name: 'Male', value: 'm'},
                    {name: 'Female', value: 'f'}
                ]
            }
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

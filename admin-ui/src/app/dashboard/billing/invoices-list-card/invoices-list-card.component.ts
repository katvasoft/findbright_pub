import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../../../state/app.actions';
import * as fromApp from '../../../state/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-invoices-list-card',
  templateUrl: './invoices-list-card.component.html',
  styleUrls: ['./invoices-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicesListCardComponent implements OnInit {

  source = [
    {
      id: 1,
      invoiceNumber: '1234',
      invoiceDate: '22.6.2020',
      invoiceSum: '30 €'
    },
   {
      id: 2,
      invoiceNumber: '5678',
      invoiceDate: '22.5.2020',
      invoiceSum: '30 €'
    },
  {
      id: 3,
      invoiceNumber: '8899',
      invoiceDate: '22.4.2020',
      invoiceSum: '30 €'
    }
  ];

  settings = {
  	columns: {
  		invoiceNumber: {
  			title: 'Invoice number',
  			filter: true
  		},
  		invoiceDate: {
  			title: 'Invoice date',
  			filter: true
  		},
  		invoiceSum: {
  			title: 'Invoice sum',
  			filter: true
  		}
  	},
  	delete: {
  		confirmDelete: true
  	},
  	add: {
  		confirmCreate: true
  	},
  	edit: {
  		confirmSave: true
  	},
  	actions: {
  		add: false,
  		edit: false,
  		delete: false
  	},
  	mode: 'internal',
  	pager: {
  		perPage: 10
  	}
  };

  constructor(private store: Store<fromApp.State>) { }

  updateUiInvoicesTableEditedRow(event) {
    this.store.dispatch(AppActions.updateUiInvoicesTable({ param: { editedRow: event } }));
  }

  updateUiInvoicesTableNewRow(event) {
    this.store.dispatch(AppActions.updateUiInvoicesTable({ param: { newRow: event } }));
  }

  updateUiInvoicesTableDeletedRow(event) {
    this.store.dispatch(AppActions.updateUiInvoicesTable({ param: { deletedRow: event } }));
  }

  updateUiInvoicesTableSelectedRow(event) {
    this.store.dispatch(AppActions.updateUiInvoicesTable({ param: { selectedRow: event } }));
  }

  ngOnInit(): void {
  }

}

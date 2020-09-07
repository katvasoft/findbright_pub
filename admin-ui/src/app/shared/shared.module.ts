import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbListModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbDatepickerModule, NbFormFieldModule } from '@nebular/theme';
import { BarChartComponent } from './components/bar-chart.component';
import { EchartsDirective } from './directives/echarts.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { UiValueUpdateDirective } from './directives/ui-value-update.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';
import { FormsModule } from '@angular/forms';
import { SmartTableComponent } from './components/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [BarChartComponent, EchartsDirective, SanitizeHtmlPipe, UiValueUpdateDirective, ToDatePipe, SmartTableComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgxEchartsModule,
    NbIconModule,
    NbListModule,
    NbInputModule,
    FormsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    NbFormFieldModule
  ],
  exports: [NbCardModule, BarChartComponent, EchartsDirective, NgxEchartsModule, NbIconModule, NbListModule, SanitizeHtmlPipe, UiValueUpdateDirective, ToDatePipe, NbInputModule, FormsModule, NbButtonModule, NbCheckboxModule, NbDatepickerModule, SmartTableComponent, Ng2SmartTableModule, NbFormFieldModule]
})
export class SharedModule { }

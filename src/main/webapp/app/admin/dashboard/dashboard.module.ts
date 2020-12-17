import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LegalcodeSharedModule } from 'app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';

import { dashboardRoute } from './dashboard.route';

@NgModule({
  imports: [LegalcodeSharedModule, RouterModule.forChild([dashboardRoute])],
  declarations: [DashboardComponent],
})
export class DashboardModule {}

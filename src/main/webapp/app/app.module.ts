import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { LegalcodeSharedModule } from 'app/shared/shared.module';
import { LegalcodeCoreModule } from 'app/core/core.module';
import { LegalcodeAppRoutingModule } from './app-routing.module';
import { LegalcodeHomeModule } from './home/home.module';
import { LegalcodeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { LeftSideMenuComponent } from './layouts/left-side-menu/left-side-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    LegalcodeSharedModule,
    LegalcodeCoreModule,
    LegalcodeHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    LegalcodeEntityModule,
    LegalcodeAppRoutingModule,
  ],
  declarations: [
    MainComponent,
    LeftSideMenuComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
  ],
  bootstrap: [MainComponent],
})
export class LegalcodeAppModule {}

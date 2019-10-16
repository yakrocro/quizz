import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
// import { QuestionnairesComponent } from './modules/questionnaires/questionnaires.component';
// import { HomeComponent } from './modules/home/home.component';
// import { QuestionnairesComponent } from './modules/questionnaires/questionnaires.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // SidebarComponent,
    // FooterComponent,
    // QuestionnaireNewComponent,
    // QuestionnairesComponent,
    // DefaultComponent,
    // HomeComponent,
    // QuestionnairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

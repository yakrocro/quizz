import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { QuestionnairesComponent } from './modules/questionnaires/questionnaires.component';
import { QuestionnaireNewComponent } from './modules/questionnaire-new/questionnaire-new.component';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  { path:'', component: DefaultComponent,
  children: [
    {path:'', component: HomeComponent },
    {path:'questionnaires', component: QuestionnairesComponent },
    {path:'questionnaires/nouveau', component: QuestionnaireNewComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

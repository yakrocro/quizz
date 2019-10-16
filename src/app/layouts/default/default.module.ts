import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from '../../modules/home/home.component';
import { QuestionnairesComponent } from '../../modules/questionnaires/questionnaires.component';
import { DefaultComponent } from './default.component';
import { QuestionnaireNewComponent } from '../../modules/questionnaire-new/questionnaire-new.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    QuestionnairesComponent,
    QuestionnaireNewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }

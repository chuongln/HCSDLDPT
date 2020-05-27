import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AngularMaterial } from '../../angular-material';
import { MomentModule } from 'ngx-moment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { QuillModule } from 'ngx-quill';
import { MatTabsModule} from '@angular/material/tabs';
// Translate
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { JobsRoutingModule } from './jobs-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ProjectMemberComponent } from './project-member/project-member.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { DmProjectTypeComponent } from './dm-project-type/dm-project-type.component';
import { ProjectDialogComponent } from './project/project-dialog.component';
import { ProjectMemberDialogComponent } from './project-member/project-member-dialog.component';
import { ProjectTaskDialogComponent } from './project-task/project-task-dialog.component';
import { ProjectComponentDialogComponent } from './project-component/project-component-dialog.component';
import { DmProjectTypeDialogComponent } from './dm-project-type/dm-project-type-dialog.component';
import { ProjectTaskDetailComponent } from './project-task/project-task-detail.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProjectTaskActivityComponent } from './project-task/project-task-activity.component';
import { DialogActivityComponent } from './project-task/dialog-activity.component';
import { DialogTaskComponent } from './project-task/dialog-task.component';
// import { ScykModule } from '../scyk/scyk.module';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectComponentComponent,
    ProjectMemberComponent,
    ProjectTaskComponent,
    DmProjectTypeComponent,
    ProjectDialogComponent,
    ProjectMemberDialogComponent,
    ProjectTaskDialogComponent,
    ProjectComponentDialogComponent,
    DmProjectTypeDialogComponent,
    ProjectTaskDetailComponent,
    ProjectTaskActivityComponent,
    DialogActivityComponent,
    DialogTaskComponent,
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularMaterial,
    MomentModule,
    MatProgressSpinnerModule,
    JobsRoutingModule,
    InputTextareaModule,
    EditorModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
         ['bold', 'italic', 'underline', 'strike'],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        ['blockquote', 'code-block']
        ]
      }
    }),
    TreeViewModule,
    BsDropdownModule.forRoot(),
    MatTabsModule,
    // ScykModule,
  ],
  entryComponents: [
    ProjectDialogComponent,
    ProjectMemberDialogComponent,
    ProjectTaskDialogComponent,
    ProjectComponentDialogComponent,
    DmProjectTypeDialogComponent,
    ProjectTaskActivityComponent,
    DialogActivityComponent,
    DialogTaskComponent,
  ],
})
export class JobsModule { }

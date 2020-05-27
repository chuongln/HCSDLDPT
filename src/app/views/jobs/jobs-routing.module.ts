import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectMemberComponent } from './project-member/project-member.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { DmProjectTypeComponent } from './dm-project-type/dm-project-type.component';
import { ProjectTaskDetailComponent } from './project-task/project-task-detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Jobs'
    },
    children: [
      {
        path: '',
        redirectTo: 'project'
      },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: 'Project'
        }
      },
      {
        path: 'project/member/:id_project',
        component: ProjectMemberComponent,
        data: {
          title: 'Project Member'
        }
      },
      {
        path: 'project/component/:id_project',
        component: ProjectComponentComponent,
        data: {
          title: 'Project Component'
        }
      },
      {
        path: 'project/task/:code_project',
        component: ProjectTaskComponent,
        data: {
          title: 'Project Task'
        }
      },
      {
        path: 'project/task',
        component: ProjectTaskComponent,
        data: {
          title: 'Project Task'
        }
      },
      {
        path: 'project/task/detail/:code_task',
        component: ProjectTaskDetailComponent,
        data: {
          title: 'Project Task Detail'
        }
      },
      {
        path: 'project-type',
        component: DmProjectTypeComponent,
        data: {
          title: 'Project Type'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragonNewComponent } from './dragon-new/dragon-new.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonViewComponent } from './dragon-view/dragon-view.component';

const routes: Routes = [
  {
    path: 'dragon-new',
    component: DragonNewComponent
  },
  {
    path: 'dragon-new/:id',
    component: DragonNewComponent
  },
  {
    path: 'dragon-list',
    component: DragonListComponent
  },
  {
    path: 'dragon-view/:id',
    component: DragonViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonRoutingModule { }

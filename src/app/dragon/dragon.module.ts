import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { DragonRoutingModule } from './dragon-routing.module';
import { DragonNewComponent } from './dragon-new/dragon-new.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonViewComponent } from './dragon-view/dragon-view.component';

@NgModule({
  declarations: [
    DragonNewComponent,
    DragonListComponent,
    DragonViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragonRoutingModule
  ]
})

export class DragonModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: ResumeComponent }];

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    ClarityModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
})
export class ResumeModule {}

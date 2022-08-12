import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ResumeComponent }];

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ResumeModule {}

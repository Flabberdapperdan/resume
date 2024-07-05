import { Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { AnotherDayComponent } from './another-day/another-day.component';
import { TimeBanditComponent } from './time-bandit/time-bandit.component';

export const routes: Routes = [
  { path: 'today', component: TodayComponent },
  { path: 'another-day', component: AnotherDayComponent },
  { path: 'time-bandit', component: TimeBanditComponent },
];

import { Routes } from '@angular/router';
import { Page1Component } from './pagess/page1/page1.component';
import { Page2Component } from './pagess/page2/page2.component';
import { Page3Component } from './pagess/page3/page3.component';
import { NotFoundComponent } from './pagess/not-found/not-found.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';

export const routes: Routes = [
    { path: '', component: Page1Component },
      { path: 'page/:id', component: Page2Component, canActivate: [confirmInGuard]},
      { path: 'page3', component: Page3Component, canDeactivate:[confirmOutGuard] },
      { path: '**', component: NotFoundComponent }
];

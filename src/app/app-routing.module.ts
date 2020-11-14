import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MergeComponent } from './merge/merge.component';
import { MonStoreComponent } from './mon-store/mon-store.component';
import { MonsComponent } from './mons/mons.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'summon',
    component: MonStoreComponent,
    pathMatch: 'full'
  },
  {
    path: 'mons',
    component: MonsComponent,
    pathMatch: 'full'
  },
  {
    path: 'spawn',
    component: MergeComponent,
    pathMatch: 'full'
  },
  {
    path: 'faq',
    component: FaqComponent,
    pathMatch: 'full'
  },
  {
    path: 'claim',
    component: ClaimComponent,
    pathMatch: 'full'
  },
  // wildcard
  {
    path: '**',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

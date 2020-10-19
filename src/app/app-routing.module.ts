import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

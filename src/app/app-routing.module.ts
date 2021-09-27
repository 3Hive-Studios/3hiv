import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { HomeComponent } from './home/home.component';
import { SpawnComponent } from './spawn/spawn.component';
import { SummonComponent } from './summon/summon.component';
import { CollectionComponent } from './collection/collection.component';
import { MonsterComponent } from './monster/monster.component';
import { FarmComponent } from './farm/farm.component';
import { CreditsComponent } from './credits/credits.component';
import { SenderComponent } from './sender/sender.component';
import { OnChainComponent } from './on-chain/on-chain.component';
import { MultisenderComponent } from './multisender/multisender.component';
import { BundlerComponent } from './bundler/bundler.component';
import { OldMonsComponent } from './old-mons/old-mons.component';
import { OldCollectionComponent } from './old-collection/old-collection.component';
import { Summon2Component } from './summon2/summon2.component';
import { MinterComponent } from './minter/minter.component';
import { TokenComponent } from './token/token.component';
import { XxmonComponent } from './xxmon/xxmon.component';
import { ProvenanceComponent } from './provenance/provenance.component';
import { Story1Component } from './story1/story1.component';
import { SignComponent } from './sign/sign.component';
import { SoundscapesComponent } from './soundscapes/soundscapes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mon/:id',
    component: MonsterComponent
  },
  {
    path: 'on-chain/:txHash',
    component: OnChainComponent
  },
  {
    path: 'farm',
    component: FarmComponent
  },
  {
    path: 'summon',
    component: SummonComponent,
    pathMatch: 'full'
  },
  {
    path: 'summon2',
    component: Summon2Component
  },
  {
    path: 'spawn',
    component: SpawnComponent,
    pathMatch: 'full'
  },
  {
    path: 'claim',
    component: ClaimComponent,
    pathMatch: 'full'
  },
  {
    path: 'collection',
    component: CollectionComponent,
    pathMatch: 'full'
  },
  {
    path: 'credits',
    component: CreditsComponent,
    pathMatch: 'full'
  },
  {
    path: 'multisender',
    component: MultisenderComponent
  },
  {
    path: 'sender',
    component: SenderComponent
  },
  {
    path: 'bundler',
    component: BundlerComponent
  },
  {
    path: 'old-mon/:id',
    component: OldMonsComponent
  },
  {
    path: 'old-collection',
    component: OldCollectionComponent
  },
  {
    path: 'minter',
    component: MinterComponent
  },
  {
    path: 'token/:address',
    component: TokenComponent
  },
  {
    path: 'xxmon',
    component: XxmonComponent
  },
  {
    path: 'all',
    component: ProvenanceComponent
  },
  {
    path: 'story1',
    component: Story1Component
  },
  {
    path: 'sign',
    component: SignComponent
  },
  {
    path: 'sounds',
    component: SoundscapesComponent
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

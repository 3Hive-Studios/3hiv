import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SpawnComponent } from './spawn/spawn.component';
import { FooterComponent } from './footer/footer.component';
import { ClaimComponent } from './claim/claim.component';
import { MenuComponent } from './menu/menu.component';
import { SummonComponent } from './summon/summon.component';
import { CollectionComponent } from './collection/collection.component';
import { MonsterComponent } from './monster/monster.component';
import { FarmComponent } from './farm/farm.component';
import { CreditsComponent } from './credits/credits.component';
import { SenderComponent } from './sender/sender.component';
import { FounderComponent } from './founder/founder.component';
import { OnChainComponent } from './on-chain/on-chain.component';
import { MultisenderComponent } from './multisender/multisender.component';
import { BundlerComponent } from './bundler/bundler.component';
import { Summon2Component } from './summon2/summon2.component';
import { OldMonsComponent } from './old-mons/old-mons.component';
import { OldCollectionComponent } from './old-collection/old-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SpawnComponent,
    FooterComponent,
    ClaimComponent,
    MenuComponent,
    SummonComponent,
    CollectionComponent,
    MonsterComponent,
    FarmComponent,
    CreditsComponent,
    SenderComponent,
    FounderComponent,
    OnChainComponent,
    MultisenderComponent,
    BundlerComponent,
    Summon2Component,
    OldMonsComponent,
    OldCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

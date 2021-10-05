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
import { OnChainComponent } from './on-chain/on-chain.component';
import { MultisenderComponent } from './multisender/multisender.component';
import { BundlerComponent } from './bundler/bundler.component';
import { Summon2Component } from './summon2/summon2.component';
import { OldMonsComponent } from './old-mons/old-mons.component';
import { OldCollectionComponent } from './old-collection/old-collection.component';
import { MinterComponent } from './minter/minter.component';
import { TokenComponent } from './token/token.component';
import { XxmonComponent } from './xxmon/xxmon.component';
import { ProvenanceComponent } from './provenance/provenance.component';
import { Story1Component } from './story1/story1.component';
import { SignComponent } from './sign/sign.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SoundscapesComponent } from './soundscapes/soundscapes.component';
import { ClusterComponent } from './cluster/cluster.component';

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
    OnChainComponent,
    MultisenderComponent,
    BundlerComponent,
    Summon2Component,
    OldMonsComponent,
    OldCollectionComponent,
    MinterComponent,
    TokenComponent,
    XxmonComponent,
    ProvenanceComponent,
    Story1Component,
    SignComponent,
    SoundscapesComponent,
    ClusterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

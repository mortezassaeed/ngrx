import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducer } from './store/reducers/app.reducer';
import { environment } from '../environments/environment';
//import { UserEffects } from './store/effects/user.effects';
import { USerService } from './services/user.service';
import { SampleComponent } from './sample/sample.component';




@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    //EffectsModule.forRoot([UserEffects]),
    //StoreRouterConnectingModule.forRoot({ statekey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
    
  ],
  providers: [USerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

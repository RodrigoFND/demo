

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgxsModule } from '@ngxs/store';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';





@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

    
   
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

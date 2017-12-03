import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routers} from './app.route';

import { AppComponent } from './app.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { SwitchConditionComponent } from './switch-condition/switch-condition.component';
import { IfConditionComponent } from './if-condition/if-condition.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenOneComponent } from './model-driven-one/model-driven-one.component';
import {FirstPipe} from './first.pipe';
import { Route1Component } from './routing/route1/route1.component';
import { Route2Component } from './routing/route2/route2.component';
import { Route3Component } from './routing/route3/route3.component';
import { Route4Component } from './routing/route4/route4.component';
import { Route5Component } from './routing/route5/route5.component';
import { Route6Component } from './routing/route6/route6.component';
import { Route7Component } from './routing/route7/route7.component';


@NgModule({
  declarations: [
    AppComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    SwitchConditionComponent,
    IfConditionComponent,
    TemplateDrivenComponent,
    ModelDrivenOneComponent,
    FirstPipe,
    Route1Component,
    Route2Component,
    Route3Component,
    Route4Component,
    Route5Component,
    Route6Component,
    Route7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

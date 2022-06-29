import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppOutputComponent } from './app.component';
import { AppInputComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AppOutputComponent, AppInputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

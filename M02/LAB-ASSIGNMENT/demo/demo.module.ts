import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LabAssignmentModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, LabAssignmentModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateEntryComponent } from './private-entry.component';

@NgModule({
  declarations: [PrivateEntryComponent],
  imports: [CommonModule, PrivateRoutingModule],
})
export class PrivateEntryModule {}

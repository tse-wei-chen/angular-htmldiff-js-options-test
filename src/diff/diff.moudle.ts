import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';//使用模版表單驅動需要import這個模組
import { DiffComponent }   from './diff.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    DiffComponent
  ],
  providers: [],
  bootstrap: [ DiffComponent ]
})
export class diffModule { }
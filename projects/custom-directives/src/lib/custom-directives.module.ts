import { NgModule } from '@angular/core';
import { OnlyNumbersDirective } from './only-number.directive';
import { HighlightDirective } from './high-light.directive';



@NgModule({
  declarations: [
    OnlyNumbersDirective,
    HighlightDirective
  ],
  imports: [
  ],
  exports: [
    OnlyNumbersDirective,
    HighlightDirective
  ]
})
export class CustomDirectivesModule { }

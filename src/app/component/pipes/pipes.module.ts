import { NgModule } from '@angular/core';
import { LocalDateTimePipe } from './locaDateTimePipe';

@NgModule({
    declarations: [LocalDateTimePipe],
    exports: [LocalDateTimePipe]
})
export class PipesModule {

}

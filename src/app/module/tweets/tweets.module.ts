import { NgModule } from '@angular/core';
import { TweetsComponent } from './tweets.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/component/pipes/pipes.module';


@NgModule({
    imports: [CommonModule, PipesModule],
    declarations: [TweetsComponent],
    exports: [TweetsComponent]
})
export class TweetsModule { }

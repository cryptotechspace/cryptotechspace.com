import { NgModule } from '@angular/core';
import { TweetsComponent } from './tweets.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    declarations: [TweetsComponent],
    exports: [TweetsComponent]
})
export class TweetsModule { }

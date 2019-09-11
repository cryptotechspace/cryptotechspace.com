import { NgModule } from '@angular/core';
import { VideosComponent } from './videos.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/component/pipes/pipes.module';

@NgModule({
    imports: [CommonModule, PipesModule],
    declarations: [VideosComponent],
    exports: [VideosComponent]
})
export class VideosModule { }

import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/component/pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { RedditService } from './reddit.sevice';
import { RedditComponent } from './reddit.component';

@NgModule({
    imports: [CommonModule, PipesModule],
    declarations: [RedditComponent],
    providers: [RedditService]
})
export class RedditModule {

}

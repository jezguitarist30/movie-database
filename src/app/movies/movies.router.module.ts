import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
    {
        path: 'movies',
        component: MoviesComponent,        
        children: [
            {
                path: '',             
                children: [
                    {
                        path: 'movie-list', component: MovieListComponent
                    },                  
                    { path: '', component: MoviesComponent }
                ],
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MoviesRouterModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 
		path: 'comics', 
		loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule) 
	},
	{ 
		path: 'timeline', 
		loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule) 
	},
	{ 
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

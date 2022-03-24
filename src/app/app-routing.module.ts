import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('../app/todoList/todo/todo.module').then(p => p.TodoModule)
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

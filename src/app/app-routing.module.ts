import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ImportantComponent} from './important/important.component';
import {PhonebookComponent} from './phonebook/phonebook.component';

const routes: Routes = [
{
	path:"",component: HomePageComponent
},
{	path:"important", component: ImportantComponent
},
{	path:"phonebook", component: PhonebookComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

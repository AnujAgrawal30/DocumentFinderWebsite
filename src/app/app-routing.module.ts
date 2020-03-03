import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { TagComponent } from './tag/tag.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "search", component: SearchComponent},
  { path: "add", component: AddComponent},
  { path: "file/:id", component: TagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

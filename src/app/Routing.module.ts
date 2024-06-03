import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';


const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {path: 'home', children:[
      {path:'home/aboutUs', component: HomeComponent}
    ]},
    { path: 'list', component: ListComponent },
    { path: 'list/:id', component: ItemComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', component: ListComponent }
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class RoutingModule {}
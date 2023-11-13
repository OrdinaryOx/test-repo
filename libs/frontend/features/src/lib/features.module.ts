import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';



import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
{
  path: '',
  pathMatch:'full',
  component: MealListComponent
},
// {
//   path: 'new',
//   pathMatch:'full',
//   // component: MealEditComponent
// },
{
  path: ':id',
  pathMatch:'full',
  component: MealDetailComponent
},

// {
//   path: ':id/edit',
//   pathMatch:'full',
//   // component: MealEditComponent
// },
]


@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, HttpClientModule],
  declarations: [
    MealListComponent,
    MealDetailComponent,
    MealListComponent,
    AboutComponent,
  ],
  providers: [MealService],
  exports: [MealListComponent, MealDetailComponent],
})
export class FeaturesModule {}

import { Route, RouterModule } from '@angular/router';


import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MealListComponent } from 'libs/share-a-meal/features/src/lib/meal/meal-list/meal-list.component';
import { MealDetailComponent } from 'libs/share-a-meal/features/src/lib/meal/meal-detail/meal-detail.component';
import { AboutComponent } from 'libs/share-a-meal/features/src/lib/meal/about/about.component';

//  export const appRoutes: Route[] = [
//  {
//      path:'',
//      component: NxWelcomeComponent,
//      children: [
   
//          {
//              path:'meals',
//              pathMatch:'full',
//              component: MealListComponent,
//              children: [
//                  {                
//                  path:':id',
//                  pathMatch: 'full',
//                  component: MealDetailComponent,
//              }           
//              ],
//          },
//          {
//              path:'about',
//              pathMatch:'full',
//              component: AboutComponent,
//          }
//      ]


//  }
//  ];


export const appRoutes: Route[] = [
    {
        path:'home',
        component:NxWelcomeComponent,
    },
    {
        path:'meals',
        component:MealListComponent,
    },
    {
        path:'about',
        component:AboutComponent,
    }
]
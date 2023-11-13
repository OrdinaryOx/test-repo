import { Route } from '@angular/router';


import { NxWelcomeComponent } from './nx-welcome.component';
import { MealListComponent } from 'libs/frontend/features/src/lib/meal/meal-list/meal-list.component';
import { MealDetailComponent } from 'libs/frontend/features/src/lib/meal/meal-detail/meal-detail.component';
import { AboutComponent } from 'libs/frontend/features/src/lib/about/about.component';

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
        // startup
        path:'',
        pathMatch:'full',
        redirectTo: '/home'   
    },

    {
        path:'home',
        pathMatch:'full',
        component:NxWelcomeComponent,
    },
    {
        path:'meal',
        // pathMatch:'full',
        loadChildren:() =>
        import('@client-side-project/frontend/features').then(
            (esModule) => (esModule.FeaturesModule)
        )
    },
    // {
    //     path:'meal/:id',
    //     pathMatch:'full',
    //     component: MealDetailComponent
    // },
    {
        path:'about', 
        component:AboutComponent,
    },
    {
        path:'contact',
        component:AboutComponent,
    },
    // {
    //     // catch all
    //     path:'**',
    //     redirectTo:'home'
    // },
]

  //  loadChildren:() =>
    //  import('@client-side-project/share-a-meal/user').then(
    //   (esModule) => (esModule.UserModule))
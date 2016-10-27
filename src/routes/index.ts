import { Routes } from '@angular/router';

import { PageOne } from '../app/page-one';
import { PageTwo } from '../app/page-two';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/page-one',
    pathMatch: 'full'
  },
  {
    path: 'page-one',
    component: PageOne
  },
  {
    path: 'page-two',
    component: PageTwo
  },
];

export default routes;

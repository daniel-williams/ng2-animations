import { Routes } from '@angular/router';

import { PageOne } from '../app/page-one';
import { PageTwo } from '../app/page-two';
import { PageThree } from '../app/page-three';

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
  {
    path: 'page-three',
    component: PageThree
  },
];

export { routes };

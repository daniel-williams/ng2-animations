import { Routes } from '@angular/router';

import { PageOne } from '../app/page-one';
import { PageTwo } from '../app/page-two';
import { PageThree } from '../app/page-three';
import { PageFour } from '../app/page-four';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/four',
    pathMatch: 'full'
  },
  {
    path: 'one',
    component: PageOne
  },
  {
    path: 'two',
    component: PageTwo
  },
  {
    path: 'three',
    component: PageThree
  },
  {
    path: 'four',
    component: PageFour
  },
];

export { routes };

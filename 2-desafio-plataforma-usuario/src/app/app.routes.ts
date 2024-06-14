import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { GeneralComponent } from './components/general/general.component';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { AddressComponent } from './components/general/components/address/address.component';

export const routes: Routes = [
  {
    path: '',
    component: InitialComponent,
  },
  {
    path: 'general',
    component: GeneralComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      }
    ]
  }
];

import { NgModule } from '@angular/core';
import { UserProfileComponent } from "./user-profile.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserProfileRoutingModule {}

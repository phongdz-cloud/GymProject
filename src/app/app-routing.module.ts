import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FindAllGymsComponent} from "./gyms/find-all-gyms/find-all-gyms.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {path: 'gyms', component: FindAllGymsComponent},
  {path: 'admin-dashboard/:username', component: AdminDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/:username', component: HomeComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

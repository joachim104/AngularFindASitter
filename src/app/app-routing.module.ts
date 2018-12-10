import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { PortalComponent } from './portal/portal.component';
import { FindABabyComponent } from './portal/find-a-baby/find-a-baby.component';
import { AuthGuard } from './auth/auth.guard';
import { SittersListComponent } from './sitters-list/sitters-list.component';
import { EditSitterComponent } from './edit-sitter/edit-sitter.component';
 
const routes: Routes = [
      
  
  { path: "portal", component: PortalComponent, canActivate: [AuthGuard], children:
      [
        { path: "findasitter", component: SittersListComponent },
        { path: "findababy", component: FindABabyComponent },  
      ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: "home", component: HomeComponent },
  { path: "edit-sitter/:id", component: EditSitterComponent},

  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

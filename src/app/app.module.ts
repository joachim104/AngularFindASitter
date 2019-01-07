import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PortalComponent } from './portal/portal.component';
import { FindABabyComponent } from './portal/find-a-baby/find-a-baby.component';
import { SittersListComponent } from './sitters-list/sitters-list.component';
import { FormsModule } from '@angular/forms';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer } from './store'; // Added this to get the root reducer
import { HttpClientModule }    from '@angular/common/http';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { SitterComponent } from './sitter/sitter.component';
import { SittersActions } from './sitters-list/sitters.actions';
import { EditSitterComponent } from './edit-sitter/edit-sitter.component';
import { from } from 'rxjs';
import { SittersSearchPipe } from './sitters-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PortalComponent,
    FindABabyComponent,
    SittersListComponent,
    SitterComponent,
    EditSitterComponent,
    SittersSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    NgReduxModule,
    HttpClientModule,
    NgReduxRouterModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// setups redux in our application
export class AppModule {
  // Sets up redux in our application.
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter, ) {

    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize(/* args */);
  }

}
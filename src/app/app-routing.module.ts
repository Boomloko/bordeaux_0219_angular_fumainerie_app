import { FormValidationComponent } from './pages/dashboard/form-validation/form-validation.component';
import { EventsComponent } from './pages/dashboard/events/events.component';
import { ButtonsComponent } from './components/dashboards/communication/view/buttons/buttons.component';
import { ViewComponent } from './components/dashboards/communication/view/view.component';
import { QuestionFormComponent } from './components/dashboards/communication/view/question-form/question-form.component';
import { WitnessFormComponent } from './components/dashboards/communication/view/witness-form/witness-form.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SidebarComponent } from './components/dashboards/sidebar/sidebar.component';
import { CommunicationComponent } from './pages/dashboard/communication/communication.component';
import { DocumentsComponent } from './components/dashboards/documents/documents.component';
import { VidangesComponent } from './components/dashboards/vidanges/vidanges.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from 'rxjs';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [

  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component : HomepageComponent},
  {path: 'connexion', component  : SignInComponent},
  {path: 'inscription', component  : SignUpComponent},
  {path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'validation', pathMatch: 'full'},
    {path: 'validation', component: FormValidationComponent, canActivate: [AuthGuard]},
    {path: 'vidanges', component : VidangesComponent, canActivate: [AuthGuard]},
    {path: 'documents', component : DocumentsComponent, canActivate: [AuthGuard]},
    {path: 'communication', component: CommunicationComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'avis', pathMatch: 'full'},
      {path: 'avis', component: ViewComponent, canActivate: [AuthGuard], children: [
        {path: '', component: ButtonsComponent},
        {path: 'question', component: QuestionFormComponent, canActivate: [AuthGuard]},
        {path: 'temoigner', component: WitnessFormComponent, canActivate: [AuthGuard]}]}]},
    {path: 'evenements', component : EventsComponent , canActivate: [AuthGuard]}]},
  {path: 'sidebar', component : SidebarComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling : 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  }


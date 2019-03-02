import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { ParticipantsService } from './services/participants.service';
import { AuthGuard } from 'app/services/auth-guard.service';
import { ParticipantComponent } from './views/participants/participant/participant.component';
import { ParticipantsComponent } from './views/participants/participants.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Translate_Service } from './services/translate.service';
import { SeasonComponent } from './views/events/season/season.component';
import { EventsComponent } from './views/events/events.component';
import { EventsService} from './services/events.service';
import { CurrentdataService } from './services/currentdata.service';
import { EventComponent } from './views/events/event/event.component';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminboardComponent } from './views/adminboard/adminboard.component';
import { CompetitionclassComponent } from './views/adminboard/competitionclass/competitionclass.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ParticipantComponent,
    ParticipantsComponent,
    SeasonComponent,
    EventsComponent,
    EventComponent,
    AdminboardComponent,
    CompetitionclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }
    )
  ],
  providers: [AuthService, AuthGuard, ParticipantsService, Translate_Service, EventsService, CurrentdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

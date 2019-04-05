import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    HeaderComponent
  ]
})
export class CoreModule { }

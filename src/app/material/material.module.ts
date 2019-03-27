import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatDialogModule, MatSidenavModule,
  MatNativeDateModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatDatepickerModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
    MatCardModule, MatTabsModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule, MatDatepickerModule
  ]
})
export class MaterialModule { }

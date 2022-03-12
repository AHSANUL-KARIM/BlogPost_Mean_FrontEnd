import { NgModule } from '@angular/core';


import { MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatProgressSpinnerModule, MatToolbarModule, MatPaginatorModule, MatDialogModule } from '@angular/material';


@NgModule({

  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule
    ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
  ]

})

export class AngularMaterialModule { }

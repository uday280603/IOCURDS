import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [MatButtonModule,MatSnackBarModule,MatIconModule],
  exports: [MatButtonModule,MatSnackBarModule,MatIconModule],
})
export class MaterialModule {}

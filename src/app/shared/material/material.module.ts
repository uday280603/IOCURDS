import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

let matArr=[MatButtonModule,MatSnackBarModule,MatIconModule,MatDialogModule]

@NgModule({
  imports: [...matArr],
  exports: [...matArr]
})
export class MaterialModule {}

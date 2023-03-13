import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersFormComponent } from './characters-form/characters-form.component';
import { DbzService } from './services/bdz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    CharactersFormComponent
  ],
  exports: [ MainPageComponent ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [ DbzService ],
})
export class DbzModule { }

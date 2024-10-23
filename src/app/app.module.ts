import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { HighlighterDirective } from './highlighter.directive';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListeCategoriesComponent,
    HighlighterDirective,
    SearchPipe,
    NotfoundComponent,
    ProductsCategoryComponent,
    DetailsCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

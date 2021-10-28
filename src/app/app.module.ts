import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './home/presentation/presentation.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { KnowledgeComponent } from './home/knowledge/knowledge.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ContentComponent } from './home/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    PresentationComponent,
    AboutMeComponent,
    KnowledgeComponent,
    ProjectsComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule, ToolbarService, LinkService, TableService,
  ImageService, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorModule , AppComponent
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService,
    QuickToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

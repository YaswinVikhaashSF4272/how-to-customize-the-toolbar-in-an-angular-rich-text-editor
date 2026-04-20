import { Component} from '@angular/core';
import { QuickToolbarSettingsModel,ToolbarService, LinkService, ImageService, HtmlEditorService, TableService,
    QuickToolbarService,RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService,
    QuickToolbarService],
  imports: [RichTextEditorModule]
})
export class AppComponent {
  title = 'angular-richtexteditor';

  public customToolbar: Object = {
    type: 'Scrollable',
    enableFloating: false,
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'ClearAll', 
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|', 'CreateTable',
    'CreateLink', 'Image', 'Replace', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo', '|', 'Preview', 'InsertCode']
  };
  public inlineToolbarOptions: QuickToolbarSettingsModel = {
    image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-',
    'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']

  };
}

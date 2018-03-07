import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngx-quill',
  templateUrl: './ngx-quill.component.html',
  styleUrls: ['./ngx-quill.component.sass']
})
export class NgxQuillComponent implements OnInit {
  @Output() changeNgxQuillContent: EventEmitter<string> = new EventEmitter();
  // @Input() inContent: Observable<string>;
  @Input('inContent')
  set in(value) {
    this.editorContent = value;
  }
  public editor;
  private _returnedURL: string;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: '最多不超过5000个字节'
  };

  constructor() {}

  onEditorBlured(quill) {
    // console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    // console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    // console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    // console.log('quill content is changed!', quill, html, text);
    this.changeNgxQuillContent.emit(this.editorContent);
  }
  EditorCreated(quill) {
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
    this.editor = quill;
  }
  imageHandler() {
    const Imageinput = document.createElement('input');
    Imageinput.setAttribute('type', 'file');
    Imageinput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
    Imageinput.classList.add('ql-image');
    Imageinput.addEventListener('change', () =>  {
      const file = Imageinput.files[0];
      if (Imageinput.files != null && Imageinput.files[0] != null) {
          // this._service.sendFileToServer(file).subscribe(res => {
          // this._returnedURL = res;
          // this.pushImageToEditor();
          // });
      }
  });
    Imageinput.click();
  }
  pushImageToEditor() {
    const range = this.editor.getSelection(true);
    const index = range.index + range.length;
    this.editor.insertEmbed(range.index, 'image', this._returnedURL);
  }
  ngOnInit() {
  }
}

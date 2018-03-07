import { other } from './../../../config/config';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.sass']
})
export class CkeditorComponent implements OnInit {
  // ckeditorContent = '';
  isUpImg: boolean;
  @Output() changeCKEditorContent: EventEmitter<string> = new EventEmitter();
  // @Input() inContent: Observable<string>;
  @Input('inContent')
  set in(value) {
    this.ckeditorContent = value;
  }
  public ckeditorContent: string;
  config = {
    filebrowserBrowseUrl: other.imgAll,
    filebrowserImageUploadUrl: other.iploads,
    uploadUrl: other.iploads,
    image_previewText: '上传的图片在这里',
    uiColor: '#dddddd',
    allowedContent: true
  };
  constructor() { }
  ngOnInit() {
    // this.inContent.subscribe(content => {
      // this.ckeditorContent = this.inContent;
    // });
  }
  onChange(ev) {
    // console.log('事件回调了！');
    this.changeCKEditorContent.emit(this.ckeditorContent);
  }
  onReady(ev) {
    // console.log('准备好了！');
  }
  onFocus(ev) {
    // console.log('获取焦点了！');
  }
  onBlur(ev) {
    // console.log('失去焦点了！');
  }
  save(ev) {
    this.isUpImg = !this.isUpImg;
  }
}

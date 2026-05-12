import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Icricketers } from '../../module/Icricketers';

@Component({
  selector: 'app-cricketer-form',
  templateUrl: './cricketer-form.component.html',
  styleUrls: ['./cricketer-form.component.scss'],
})
export class CricketerFormComponent implements OnInit, OnChanges {
  @Input() editObjForPatch!: Icricketers;
  @ViewChild('jersyNo') jersyNo!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('run') run!: ElementRef;
  @ViewChild('wicket') wicket!: ElementRef;
  @ViewChild('imgUrl') imgUrl!: ElementRef;
  @ViewChild('isActive') isActive!: ElementRef;

  @Output() emitNewObj: EventEmitter<Icricketers> =
    new EventEmitter<Icricketers>();
  @Output() emitUpdatedObj: EventEmitter<Icricketers> =
    new EventEmitter<Icricketers>();

  isInEditMode: boolean = false;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['editObjForPatch'].currentValue) {
      this.isInEditMode = true;
      this.jersyNo.nativeElement.value = this.editObjForPatch.jersy;
      this.name.nativeElement.value = this.editObjForPatch.name;
      this.imgUrl.nativeElement.value = this.editObjForPatch.image;
      this.run.nativeElement.value = this.editObjForPatch.runs;
      this.wicket.nativeElement.value = this.editObjForPatch.wickets;
      this.isActive.nativeElement.value = this.editObjForPatch.isPlaying;
    }
  }

  ngOnInit(): void {}

  onAddcricketer() {
    let val1: string = this.name.nativeElement.value;
    let val2: string = this.wicket.nativeElement.value;

    if (val1.length > 0 && val2.length > 0) {
      let NEW_OBJ: Icricketers = {
        id: Date.now(),
        jersy: this.jersyNo.nativeElement.value,
        name: this.name.nativeElement.value,
        image: this.imgUrl.nativeElement.value,
        runs: this.run.nativeElement.value,
        wickets: this.wicket.nativeElement.value,
        isPlaying: this.isActive.nativeElement.value==='true'?true:false,
      };
      console.log(NEW_OBJ);
      this.emitNewObj.emit(NEW_OBJ);
      this.jersyNo.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.imgUrl.nativeElement.value = '';
      this.run.nativeElement.value = '';
      this.wicket.nativeElement.value = '';
      this.isActive.nativeElement.value = '';
    }
  }

  onUpdateCricketers() {
    let UPDATED_OBJ: Icricketers = {
      id: this.editObjForPatch.id,
      jersy: this.jersyNo.nativeElement.value,
      name: this.name.nativeElement.value,
      image: this.imgUrl.nativeElement.value,
      runs: this.run.nativeElement.value,
      wickets: this.wicket.nativeElement.value,
      isPlaying: this.isActive.nativeElement.value === 'true' ? true : false
    };
    console.log(UPDATED_OBJ);
    
    this.emitUpdatedObj.emit(UPDATED_OBJ);
    this.jersyNo.nativeElement.value = '';
    this.name.nativeElement.value = '';
    this.imgUrl.nativeElement.value = '';
    this.run.nativeElement.value = '';
    this.wicket.nativeElement.value = '';
    this.isActive.nativeElement.value = '';
    this.isInEditMode = false;
  }
}

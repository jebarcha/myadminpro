import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('name') message: string = "Leyenda";
  @Input() progress: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }

  onChanges(newValue: number) {
    // let elHTML: any = document.getElementsByName("progress")[0];
    // console.log(elHTML);

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    
    // elHTML.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;
      
    this.changeValue.emit(this.progress);
  }

  updateValue(value: number) {
    if (!this.progressValidate(value)) {
      return;
    }
    this.progress = this.progress + value;
    this.changeValue.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }

  private progressValidate(value: number): boolean {
    if (this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return false;
    }
    if (this.progress <= 0 && value < 0 ) {
      this.progress = 0;
      return false;
    }
    return true;
  }

}

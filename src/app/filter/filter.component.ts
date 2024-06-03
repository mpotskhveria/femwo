import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogerService } from '../services/loger.service';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})

export class FilterComponent {

 @Input() testText: string = 'Robin'

 @Input() all: number = 0
 @Input() sakvebi: number = 0
 @Input() teqnika: number = 0
 @Input() zeti: number = 0

 constructor ( private loger: LogerService){

 }

 selectedCategory: string = 'all'

 @Output() onSelect: EventEmitter<string> = new EventEmitter<string>()

  filterCategories(){
    this.onSelect.emit(this.selectedCategory)
  }

  testService(){
    this.loger.logThem()
  }



}

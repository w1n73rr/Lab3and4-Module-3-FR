import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/services/date.service';
import { ItalicDirective } from '../../core/directive/italic.directive';

@Component({
  selector: 'app-page1',
  imports: [ItalicDirective],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  
  constructor(private dataService:DataService){
    console.log(this.dataService.getExapmleData());
  }
}

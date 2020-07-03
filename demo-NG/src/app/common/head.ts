import { Component,Input } from '@angular/core';

@Component({
  selector: 'i-head',
  templateUrl: './head.html'
})
export class HeadComponent{
  @Input('num') num:any;
  
}

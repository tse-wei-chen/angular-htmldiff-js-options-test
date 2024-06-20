import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Diff } from '@ali-tas/htmldiff-js';
import bootstrap from '../main.server';

@Component({
  selector: 'app-diff',
  standalone: true,
  imports: [],
  templateUrl: './diff.component.html',
  styleUrl: './diff.component.css',
  encapsulation: ViewEncapsulation.None
})
export class DiffComponent {
  @ViewChild('be') beElement!: ElementRef;
  @ViewChild('af') afElement!: ElementRef;
  @ViewChild('diff') diffElement!: ElementRef;

  htmlBefore : string = `<p>This is the first random paragraph.</p> 
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                         <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>
                         <h2>Random Heading 1</h2>`;

  htmlAfter : string = `<p>This is the second random paragraph.</p>
                         <p> Vestibulum nec justo sit amet est finibus tristique.</p>
                         <ul><li>Item A</li><li>Item B</li><li>Item C</li></ul>
                         <h2>Random Heading 2</h2>`;
  htmlDiff : string = "";
  options = {
    repeatingWordsAccuracy : 0,
    ignoreWhiteSpaceDifferences : false, //false 空白比對,true 忽略空白比對,default = false
    orphanMatchThreshold : 0,            
    matchGranularity: 4,                 //0  一整段比較,1以上 單字比較,default = 4
    combineWords : false
  };

  constructor() {
  }
  ngOnInit(){

  }
  ngAfterViewInit(): void {
    this.htmlDiff = Diff.execute(this.htmlBefore, this.htmlAfter, this.options);
    if (this.beElement && this.beElement.nativeElement) {
      this.beElement.nativeElement.innerHTML = this.htmlBefore;
    }
    if (this.afElement && this.afElement.nativeElement) {
      this.afElement.nativeElement.innerHTML = this.htmlAfter;
    }
    if (this.diffElement && this.diffElement.nativeElement) {
      this.diffElement.nativeElement.innerHTML = this.htmlDiff;
    }
  }
}

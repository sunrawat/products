import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective implements OnInit {
  isHide:boolean = false; 
  @Input() hideElse!: TemplateRef<unknown>; 
  @Input() set hide(show: boolean) {
    this.isHide = show;
    this.createView();
  }
  createView() {
    this.vc.clear();
    if(!!this.isHide) {
      this.vc.createEmbeddedView(this.tr);
    }else if(this.hideElse){
      this.vc.createEmbeddedView(this.hideElse);

    }
  }
  constructor(private vc: ViewContainerRef, 
    private tr: TemplateRef<unknown>) { }
     ngOnInit(): void {
      this.createView();
     }


     
     
    //  ngOnChanges(changes: SimpleChanges): void {
    //    if(!!this.hide) {
    //     this.vc.createEmbeddedView(this.tr);
    //    }else{ 
    //     this.vc.clear();
    //    }
    //  }
     

}

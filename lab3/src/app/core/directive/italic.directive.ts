import { Directive, ElementRef } from "@angular/core"

@Directive({
    selector: '[italic]',
    standalone: true
})
export class ItalicDirective{
    constructor(private elementRef:ElementRef){
        this.elementRef.nativeElement.style.fontStyle = 'italic';
    }
}
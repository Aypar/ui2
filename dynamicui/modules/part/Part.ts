/**
 * Created by Aypar on 13.3.2016.
 */
/**
 * Created by Aypar on 13.3.2016.
 */
import {Component} from 'angular2/core';
import {DynamicComponent} from '../dynamicComponent/DynamicComponent'
import {Test} from '../dynamicComponent/Test'

@Component({
    selector: 'dynamic-part',
    template: '<dynamic-component [data]="component" *ngFor="#component of components"> </dynamic-component>',
    directives:[DynamicComponent]

})

export class Part
{

    constructor()
    {
        this.components = new Array<Test>();
        var c1 = new Test()
        c1.name = "test1"
        var c2 = new Test()
        c2.name = "test2"
        this.components.push(c1)
        this.components.push(c2)
    }
    public components : Array<Test>
}

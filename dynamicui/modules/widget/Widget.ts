/**
 * Created by Aypar on 13.3.2016.
 */
import {Component} from 'angular2/core';
import {Part} from '../part/Part'

@Component({
    selector: 'dynamic-widget',
    template: '<dynamic-part> </dynamic-part>',
    directives:[Part]

})
export class Widget
{

}
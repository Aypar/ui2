/**
 * Created by Aypar on 13.3.2016.
 */
import {Component} from 'angular2/core';
import {Widget} from '../widget/Widget'

@Component({
    selector: 'dynamic-page',
    template: '<dynamic-widget> </dynamic-widget>',
    directives:[Widget]

})
export class Page
{

}
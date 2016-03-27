
/**
 * Created by Aypar on 13.3.2016.
 **/
/// <reference path="./Test.ts"/>
import {Component, Input} from 'angular2/core';
import  {Form} from  '../../components/form/Form';
import  {Test} from  './Test';

@Component(
    {
    selector: 'dynamic-component',
    template: '{{data.name}}',

    }
)
export class DynamicComponent
{
    constructor()
    {
        console.log(this);

    }
    @Input() data:Test;

}



import {DefineArgs, PropInfo} from 'trans-render/lib/types';
import {DOMArrowProps, DOMArrowActions} from './types.js';

const configs = ['color', 'dash', 'dropShadow', 'endLabel','endPlug', 'endPlugColor','endPlugOutline','endPlugOutlineColor','endPlugOutlineSize','endPlugSize',
'endSocket', 'endSocketGravity', 'gradient', 'hide', 'middleLabel', 'outline', 'outlineColor', 'outlineSize', 'path', 'show', 'size','startLabel',
'startPlug','startPlugColor','startPlugOutlineSize','startPlugSize','startSocket','startPlugOutline','startPlugOutlineColor','startSocketGravity'] as (keyof DOMArrowProps & string)[];

const stringProp: PropInfo = {
    type: 'String'
};
const numberProp: PropInfo = {
    type: 'Number'
};

const da: DefineArgs<DOMArrowProps, DOMArrowActions> = {
    config:{
        tagName: 'dom-arrow',
        propDefaults:{
            isC: true,
            show: true,
            hide: false,
            outline: false,
            startPlugOutline: false,
            endPlugOutline: false,
            loadDelay: -1,
        },
        propInfo:{
            connect: stringProp,
            to: stringProp,
            color: stringProp,
            startSocketGravity: stringProp,
            endSocketGravity: stringProp,
            startPlugColor: stringProp,
            endPlugColor: stringProp,
            startPlugSize: numberProp,
            endPlugSize: numberProp,
            outlineColor: stringProp,
            outlineSize: numberProp,
            startPlugOutlineColor: stringProp,
            endPlugOutlineColor: stringProp,
            startPlugOutlineSize: numberProp,
            endPlugOutlineSize: numberProp,
            
        },
        actions:{
            doConnect:{
                ifAllOf:['isC', 'connect', 'to'],
                ifKeyIn:['connectAreaAttachment', 'connectPointAttachment', 'toAreaAttachment', 'toPointAttachment', 'loadDelay']
            },
            doConfig:{
                ifAllOf: ['line'],
                ifKeyIn: configs,
            }
        }
    }
}

const exp = {da, configs};

console.log(JSON.stringify(exp));
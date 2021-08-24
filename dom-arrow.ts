import {CE} from 'trans-render/lib/CE.js';
import {DOMArrowProps, DOMArrowActions} from './types.js';
import { LeaderLine} from './leader-line.js';
import { Options, LeaderLine as LeaderLineType } from './leader-line-types.js';

export class DOMArrowCore extends HTMLElement implements DOMArrowActions{
    doConnect(self: this){
        const {
            connect, 
            to,
            connectAreaAttachment, 
            connectPointAttachment, 
            toAreaAttachment, 
            toPointAttachment,
            loadDelay
        } = self;
        let rn = self.getRootNode() as DocumentFragment;
        let start = rn.querySelector(connect!);
        if(connectAreaAttachment !== undefined){
            start = (<any>LeaderLine).areaAnchor(start as SVGElement, toAreaAttachment);
        }else if(connectPointAttachment){
            start = (<any>LeaderLine).pointAnchor(start, toPointAttachment);
        }
        let end = rn.querySelector(to!);
        if(toAreaAttachment !== undefined){
            end = (<any>LeaderLine).areaAnchor(start, toAreaAttachment);
        }else if(toPointAttachment){
            end = (<any>LeaderLine).pointAnchor(start, toPointAttachment);
        }
        if(loadDelay! > -1){
            setTimeout(() => {
                self.line = new LeaderLine(start, end) as any as LeaderLineType;
            }, loadDelay);
        }else{
            self.line = new LeaderLine(start, end) as any as LeaderLineType;
        }
                
    }
    doConfig(self: this){
        const {line} = self;
        const options = {} as any;
        for(const key of configs){
            options[key] = self[key];
        }
        line!.setOptions(options);
    }
}

export interface DOMArrowCore extends DOMArrowProps{}

const ce = new CE<DOMArrowProps, DOMArrowActions>();

const configs = ['color', 'dash', 'dropShadow', 'endLabel','endPlug', 'endPlugColor','endPlugOutline','endPlugOutlineColor','endPlugOutlineSize','endPlugSize',
'endSocket', 'endSocketGravity', 'gradient', 'hide', 'middleLabel', 'outline', 'outlineColor', 'outlineSize', 'path', 'show', 'size','startLabel',
'startPlug','startPlugColor','startPlugOutlineSize','startPlugSize','startSocket','startPlugOutline','startPlugOutlineColor','startSocketGravity'] as (keyof DOMArrowProps & string)[];

ce.def({
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
        actions:{
            doConnect:{
                ifAllOf:['isC', 'connect', 'to'],
            },
            doConfig:{
                ifAllOf: ['line'],
                actIfKeyIn: configs,
            }
        }
    },
    superclass: DOMArrowCore
});

declare global {
    interface HTMLElementTagNameMap {
        'dom-arrow': DOMArrowCore;
    }
}
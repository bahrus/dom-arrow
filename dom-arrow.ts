import {CE, PropInfo} from 'trans-render/lib/CE.js';
import {DOMArrowProps, DOMArrowActions} from './types.js';
import { LeaderLine} from './leader-line.js';
import { Options, LeaderLine as LeaderLineType } from './leader-line-types.js';
import {importJSON} from 'be-loaded/importJSON.js'

let configs: any;

/**
 * @tagName dom-arrow
 * @element dom-arrow
 * @prop {string} connect - The id of the element to connect from.
 * @attr {string} connect - The id of the element to connect from.
 * @prop {string} to - The id of the element to connect to.
 * @attr {string} to - The id of the element to connect to.
 * @prop {AreaAttachmentOptions} connectAreaAttachment - The area attachment options for the start of the connection.
 * @attr {AreaAttachmentOptions} connect-area-attachment - The area attachment options for the start of the connection (json).
 * @prop {AreaAttachmentOptions} toAreaAttachment - The area attachment options for the end of the  connection.
 * @attr {AreaAttachmentOptions} to-area-attachment - The area attachment options for the end of the connection (json).
 * @prop {PointAttachmentOptions} connectPointAttachment - The point attachment options for the start of the connection.
 * @attr {PointAttachmentOptions} connect-point-attachment - The point attachment options for the start of the connection (json).
 * @prop {PointAttachmentOptions} toPointAttachment - The point attachment options for the end of the connection.
 * @attr {PointAttachmentOptions} to-point-attachment - The point attachment options for the end of the connection (json).
 * @prop {number} loadDelay - The delay in milliseconds before the connection is drawn.
 * @attr {number} load-delay - The delay in milliseconds before the connection is drawn.
 * @prop {color} color - The color of the connection.
 * @attr {color} color - The color of the connection.
 * 
 */
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
            options[key] = (<any>self)[key];
        }
        line!.setOptions(options);
    }
}

export interface DOMArrowCore extends DOMArrowProps{}

async function register(){
    const imp = await importJSON('dom-arrow/da-config.json');
    const def = imp.default.da;
    configs = imp.default.configs;
    def.superclass = DOMArrowCore
    const ce = new CE<DOMArrowProps, DOMArrowActions>();
    ce.def(def);
}

register();



declare global {
    interface HTMLElementTagNameMap {
        'dom-arrow': DOMArrowCore;
    }
}
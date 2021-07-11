import {xc, IReactor, PropAction, PropDef, PropDefMap, ReactiveSurface} from 'xtal-element/lib/XtalCore.js';

export class DOMArrow extends HTMLElement implements ReactiveSurface{
    static is = 'dom-arrow';

    self = this;
    propActions = propActions;
    reactor: IReactor = new xc.Rx(this);

    connectedCallback(){
        xc.mergeProps
    }
    onPropChange(n: string, prop: PropDef, nv: any){
        this.reactor.addToQueue(prop, nv);
    }
}

const propActions = [] as PropAction[];

const propDefMap: PropDefMap<DOMArrow> = {

};
const slicedPropDefs = xc.getSlicedPropDefs(propDefMap);
xc.letThereBeProps(DOMArrow, slicedPropDefs, 'onPropChange');
xc.define(DOMArrow);
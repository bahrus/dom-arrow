import { xc } from 'xtal-element/lib/XtalCore.js';
export class DOMArrow extends HTMLElement {
    constructor() {
        super(...arguments);
        this.self = this;
        this.propActions = propActions;
        this.reactor = new xc.Rx(this);
    }
    connectedCallback() {
        xc.mergeProps;
    }
    onPropChange(n, prop, nv) {
        this.reactor.addToQueue(prop, nv);
    }
}
DOMArrow.is = 'dom-arrow';
const propActions = [];
const propDefMap = {};
const slicedPropDefs = xc.getSlicedPropDefs(propDefMap);
xc.letThereBeProps(DOMArrow, slicedPropDefs, 'onPropChange');
xc.define(DOMArrow);

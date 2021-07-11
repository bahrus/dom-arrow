import { xc } from 'xtal-element/lib/XtalCore.js';
import { LeaderLine } from './LeaderLineESM.js';
export class DOMArrow extends HTMLElement {
    constructor() {
        super(...arguments);
        /**
         * @private
         */
        this.self = this;
        /**
         * @private
         */
        this.propActions = propActions;
        /**
         * @private
         */
        this.reactor = new xc.Rx(this);
    }
    connectedCallback() {
        this.style.display = 'none';
        xc.mergeProps(this, slicedPropDefs);
    }
    onPropChange(n, prop, nv) {
        this.reactor.addToQueue(prop, nv);
    }
}
DOMArrow.is = 'dom-arrow';
const onNewStartEnd = ({ connect: startSelector, to: endSelector, self }) => {
    let rn = self.getRootNode();
    if (rn.host !== undefined)
        rn = rn.host;
    const start = rn.querySelector(startSelector);
    const end = rn.querySelector(endSelector);
    self.line = new LeaderLine(start, end);
};
const configLine = ({ line, color }) => {
    const options = {
        color,
    };
    line.setOptions(options);
};
const propActions = [onNewStartEnd, configLine];
const baseProp = {
    async: true,
    dry: true,
};
const boolProp = {
    ...baseProp,
    type: Boolean,
};
const objProp = {
    ...baseProp,
    type: Object,
};
const parsedObjProp = {
    ...objProp,
    parse: true,
};
const pubProp = {
    ...objProp,
    type: Object,
};
const strProp1 = {
    ...baseProp,
    type: String
};
const numProp1 = {
    ...baseProp,
    type: Number,
};
const reqStrProp = {
    ...strProp1,
    stopReactionsIfFalsy: true,
};
const propDefMap = {
    connect: reqStrProp,
    to: reqStrProp,
    color: strProp1,
    size: numProp1,
    path: strProp1,
    startSocket: strProp1,
    endSocket: strProp1,
    startSocketGravity: parsedObjProp,
    endSocketGravity: parsedObjProp,
    startPlug: strProp1,
    endPlug: strProp1,
    startPlugColor: strProp1,
    endPlugColor: strProp1,
    startPlugSize: numProp1,
    endPlugSize: numProp1,
    outline: boolProp,
    outlineColor: strProp1,
    outlineSize: numProp1,
    startPlugOutline: boolProp,
    endPlugOutline: boolProp,
    startPlugOutlineColor: strProp1,
    endPlugOutlineColor: strProp1,
    startPlugOutlineSize: numProp1,
    endPlugOutlineSize: numProp1,
    startLabel: strProp1,
    middleLabel: strProp1,
    endLabel: strProp1,
    dash: parsedObjProp,
    gradient: parsedObjProp,
    dropShadow: parsedObjProp,
    show: boolProp,
    hide: boolProp,
};
const slicedPropDefs = xc.getSlicedPropDefs(propDefMap);
xc.letThereBeProps(DOMArrow, slicedPropDefs, 'onPropChange');
xc.define(DOMArrow);

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
const objProp = {
    ...baseProp,
    type: Object,
};
const pubProp = {
    ...objProp,
    type: Object,
};
const strProp1 = {
    ...baseProp,
    type: String
};
const reqStrProp = {
    ...strProp1,
    stopReactionsIfFalsy: true,
};
const propDefMap = {
    connect: reqStrProp,
    to: reqStrProp,
    color: strProp1,
};
const slicedPropDefs = xc.getSlicedPropDefs(propDefMap);
xc.letThereBeProps(DOMArrow, slicedPropDefs, 'onPropChange');
xc.define(DOMArrow);

import { xc } from 'xtal-element/lib/XtalCore.js';
import { LeaderLine } from './leader-line.js';
export class DOMArrow extends HTMLElement {
    static is = 'dom-arrow';
    /**
     * @private
     */
    self = this;
    /**
     * @private
     */
    propActions = propActions;
    /**
     * @private
     */
    reactor = new xc.Rx(this);
    connectedCallback() {
        this.style.display = 'none';
        xc.mergeProps(this, slicedPropDefs);
        this.isC = true;
    }
    onPropChange(n, prop, nv) {
        this.reactor.addToQueue(prop, nv);
    }
}
const onNewStartEnd = ({ isC, connect, to, connectAreaAttachment, toAreaAttachment, connectPointAttachment, toPointAttachment, self }) => {
    let rn = self.getRootNode();
    //if((<any>rn).host !== undefined) rn = (<any>rn).host;
    let start = rn.querySelector(connect);
    if (connectAreaAttachment !== undefined) {
        start = LeaderLine.areaAnchor(start, toAreaAttachment);
    }
    else if (connectPointAttachment) {
        start = LeaderLine.pointAnchor(start, toPointAttachment);
    }
    let end = rn.querySelector(to);
    if (toAreaAttachment !== undefined) {
        end = LeaderLine.areaAnchor(start, toAreaAttachment);
    }
    else if (toPointAttachment) {
        end = LeaderLine.pointAnchor(start, toPointAttachment);
    }
    self.line = new LeaderLine(start, end);
};
const configLine = ({ line, color, dash, dropShadow, endLabel, endPlug, endPlugColor, endPlugOutline, endPlugOutlineColor, endPlugOutlineSize, endPlugSize, endSocket, endSocketGravity, gradient, hide, middleLabel, outline, outlineColor, outlineSize, path, show, size, startLabel, startPlug, startPlugColor, startPlugOutlineSize, startPlugSize, startSocket, startPlugOutline, startPlugOutlineColor, startSocketGravity }) => {
    const options = {
        color,
        dash,
        dropShadow,
        endLabel,
        endPlug,
        endPlugColor,
        endPlugOutline,
        endPlugOutlineColor,
        endPlugOutlineSize,
        endPlugSize,
        endSocket,
        endSocketGravity,
        gradient,
        hide,
        middleLabel,
        outline,
        outlineColor,
        outlineSize,
        path,
        show,
        size,
        startLabel,
        startPlug,
        startPlugColor,
        startPlugOutlineSize,
        startPlugSize,
        startSocket,
        startPlugOutline,
        startPlugOutlineColor,
        startSocketGravity
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
const nnBool = {
    ...boolProp,
    stopReactionsIfFalsy: true,
};
const objProp = {
    ...baseProp,
    type: Object,
};
const nnObj = {
    ...objProp,
    stopReactionsIfFalsy: true,
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
    isC: nnBool,
    line: nnObj,
    connectAreaAttachment: parsedObjProp,
    toAreaAttachment: parsedObjProp,
    connectPointAttachment: parsedObjProp,
    toPointAttachment: parsedObjProp,
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

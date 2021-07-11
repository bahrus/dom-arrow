import {xc, IReactor, PropAction, PropDef, PropDefMap, ReactiveSurface} from 'xtal-element/lib/XtalCore.js';
import {DOMArrowProps} from './types.d.js';
import {Options} from './leader-line-types.d.js';
import {LeaderLine} from './LeaderLineESM.js';

export class DOMArrow extends HTMLElement implements ReactiveSurface{
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
    reactor: IReactor = new xc.Rx(this);



    connectedCallback(){
        this.style.display = 'none';
        xc.mergeProps(this, slicedPropDefs);
    }
    onPropChange(n: string, prop: PropDef, nv: any){
        this.reactor.addToQueue(prop, nv);
    }
}
export interface DOMArrow extends DOMArrowProps{}

const onNewStartEnd = ({connect: startSelector, to: endSelector, self}: DOMArrow) => {
    let rn = self.getRootNode() as DocumentFragment;
    if((<any>rn).host !== undefined) rn = (<any>rn).host;
    const start = rn.querySelector(startSelector);
    const end = rn.querySelector(endSelector);
    self.line = new LeaderLine(start, end);
}

const configLine = ({line, color}: DOMArrow) => {
    const options: Options = {
        color,
    };
    line.setOptions(options);
}

const propActions = [onNewStartEnd, configLine] as PropAction[];

const baseProp: PropDef = {
    async: true,
    dry: true,
};

const objProp: PropDef = {
    ...baseProp,
    type: Object,
};

const pubProp: PropDef = {
    ...objProp,
    type: Object,
}


const strProp1 : PropDef = {
    ...baseProp,
    type: String
};

const reqStrProp: PropDef = {
    ...strProp1,
    stopReactionsIfFalsy: true,
    
};

const propDefMap: PropDefMap<DOMArrow> = {
    connect: reqStrProp,
    to: reqStrProp,
    color: strProp1,
};
const slicedPropDefs = xc.getSlicedPropDefs(propDefMap);
xc.letThereBeProps(DOMArrow, slicedPropDefs, 'onPropChange');
xc.define(DOMArrow);
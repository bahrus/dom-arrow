import { CE } from 'trans-render/lib/CE.js';
import { LeaderLine } from './leader-line.js';
export class DOMArrowCore extends HTMLElement {
    doConnect(self) {
        const { connect, to, connectAreaAttachment, connectPointAttachment, toAreaAttachment, toPointAttachment, loadDelay } = self;
        let rn = self.getRootNode();
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
        if (loadDelay > -1) {
            setTimeout(() => {
                self.line = new LeaderLine(start, end);
            }, loadDelay);
        }
        else {
            self.line = new LeaderLine(start, end);
        }
    }
    doConfig(self) {
        const { line } = self;
        const options = {};
        for (const key of configs) {
            options[key] = self[key];
        }
        line.setOptions(options);
    }
}
const ce = new CE();
const configs = ['color', 'dash', 'dropShadow', 'endLabel', 'endPlug', 'endPlugColor', 'endPlugOutline', 'endPlugOutlineColor', 'endPlugOutlineSize', 'endPlugSize',
    'endSocket', 'endSocketGravity', 'gradient', 'hide', 'middleLabel', 'outline', 'outlineColor', 'outlineSize', 'path', 'show', 'size', 'startLabel',
    'startPlug', 'startPlugColor', 'startPlugOutlineSize', 'startPlugSize', 'startSocket', 'startPlugOutline', 'startPlugOutlineColor', 'startSocketGravity'];
ce.def({
    config: {
        tagName: 'dom-arrow',
        propDefaults: {
            isC: true,
            show: true,
            hide: false,
            outline: false,
            startPlugOutline: false,
            endPlugOutline: false,
            loadDelay: -1,
        },
        actions: {
            doConnect: {
                ifAllOf: ['isC', 'connect', 'to'],
                actIfKeyIn: ['connectAreaAttachment', 'connectPointAttachment', 'toAreaAttachment', 'toPointAttachment', 'loadDelay']
            },
            doConfig: {
                ifAllOf: ['line'],
                actIfKeyIn: configs,
            }
        }
    },
    superclass: DOMArrowCore
});

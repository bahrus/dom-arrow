import { CE } from 'trans-render/lib/CE.js';
import { LeaderLine } from './leader-line.js';
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
const stringProp = {
    type: 'String'
};
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
        propInfo: {
            connect: stringProp,
            to: stringProp,
            color: stringProp,
            startSocketGravity: stringProp,
            endSocketGravity: stringProp,
            startPlugColor: stringProp,
            endPlugColor: stringProp,
        },
        actions: {
            doConnect: {
                ifAllOf: ['isC', 'connect', 'to'],
                ifKeyIn: ['connectAreaAttachment', 'connectPointAttachment', 'toAreaAttachment', 'toPointAttachment', 'loadDelay']
            },
            doConfig: {
                ifAllOf: ['line'],
                ifKeyIn: configs,
            }
        }
    },
    superclass: DOMArrowCore
});

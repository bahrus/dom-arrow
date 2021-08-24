import {LeaderLine, Options} from './leader-line-types.js';

export interface DOMArrowProps extends Options{
    connect?: string,
    to?: string,
    connectAreaAttachment?: AreaAttachmentOptions,
    toAreaAttachment?: AreaAttachmentOptions,
    connectPointAttachment?: PointAttachmentOptions,
    toPointAttachment?: PointAttachmentOptions,
    /**
     * @private
     */
    line?: LeaderLine;
    isC?: boolean;
}

export interface DOMArrowActions{
    doConnect(self: this): void;
    doConfig(self: this): void;
}

export interface AreaAttachmentOptions extends PointAttachmentOptions{
    width: number,
    height: number,
}

export interface PointAttachmentOptions{
    x: number,
    y: number,
}
import {LeaderLine, Options} from './leader-line-types.js';

export interface DOMArrowProps extends HTMLElement, Options{
    connect: string,
    to: string,
    connectAreaAttachment: AreaAttachmentOptions,
    toAreaAttachment: AreaAttachmentOptions,
    connectPointAttachment: PointAttachmentOptions,
    toPointAttachment: PointAttachmentOptions,
    /**
     * @private
     */
    line: LeaderLine;
    isC: boolean;
}

export interface AreaAttachmentOptions extends PointAttachmentOptions{
    width: number,
    height: number,
}

export interface PointAttachmentOptions{
    x: number,
    y: number,
}
import {LeaderLine, Options} from './leader-line-types.js';
export interface DOMArrowProps extends HTMLElement, Options{
    connect: string,
    to: string,
    /**
     * @private
     */
    line: LeaderLine;
}
export interface CssDirection {
    top: number;
    bottom?: number;
    left?: number;
    right?: number;
}
export declare function getCssDirection(all: number): CssDirection;
export declare function getCssDirection(topAndBottom: number, leftAndRight: number): CssDirection;
export declare function getCssDirection(top: number, right: number, bottom: number, left: number): CssDirection;

export interface CssDirection {
    top: number,
    bottom?: number,
    left?: number,
    right?: number
}

// 函数重载
export function getCssDirection(all: number): CssDirection
export function getCssDirection(topAndBottom: number, leftAndRight: number): CssDirection
export function getCssDirection(top: number, right: number, bottom: number, left: number): CssDirection

export function getCssDirection (top: number, right?: number, bottom?: number, left?: number) {
    if (right === undefined && bottom === undefined && left === undefined) {
        right = bottom = left = top
    } else if (bottom === undefined && left === undefined) {
        bottom = top
        left = right
    }
    return {
        top,
        right,
        bottom,
        left
    }
}

import { getCssDirection } from '../entries'

export const cssDirectionTest = () => {
    getCssDirection(10);
    getCssDirection(20, 30);
    // getCssDirection(20, 30, 40); // 报错
    getCssDirection(20, 30, 40, 50);
}

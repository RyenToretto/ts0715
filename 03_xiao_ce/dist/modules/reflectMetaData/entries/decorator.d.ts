export declare const METHOD_METADATA = "method";
export declare const PATH_METADATA = "path";
export declare const Controller: (path: string) => ClassDecorator;
export declare const createMappingDecorator: (method: string) => (path: string) => MethodDecorator;
export declare function mapRoute(instance: Object): {
    route: any;
    method: any;
    fn: any;
    methodName: string;
}[];

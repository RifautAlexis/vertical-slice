import { IRequestBase } from "./request";

/**
 * Defines a Handler with a requets and a response
 */
export interface IHandler<TRequest extends IRequestBase, TResponse> extends IHandlerBase {
    handle(request: TRequest): Promise<TResponse> | TResponse;
}
/**
 * Defines a basic Handler
 */
export interface IHandlerBase {
    handle(request: any): Promise<any> | any;
}
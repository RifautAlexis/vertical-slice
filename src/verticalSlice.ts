import { IHandler, IHandlerBase } from "./handler";
import { IRequestBase, IRequest } from "./request";

/**
 * Manage registration and resolving handlers
 */
class VerticalSlice {
    private handlers: Record<string, IHandlerBase> = {};

    /**
     * Register a handler in a dictionnary
     * 
     * @param request - Request associated with handler in registration
     * @param handler - Handler in registration
     */
    registerHandler<TRequest extends IRequestBase>(request: { new(): TRequest }, handler: IHandler<TRequest, any>): void {
        const requestName: string = this.GetTypeName(new request());

        if(this.handlers[requestName] !== undefined) {
            throw new Error("Request is already attribute to a handler");
        }

        this.handlers[requestName] = handler;
    }

    /**
     * Return the handler corresponding to the request
     * 
     * @param request - Request associated with desired handler
     * @returns The result from the handler
     */
    async send<TResponse>(request: IRequest<TResponse>): Promise<TResponse> {
        if(request === undefined || request === null) {
            throw new Error("Null or undefined request");
        }

        const requestName: string = this.GetTypeName(request);
        const handlerFunction = this.handlers[requestName];

        if(!!!handlerFunction) {
            throw new Error("Request is not registered");
        }

        const handler = <IHandler<IRequestBase, TResponse>>this.handlers[requestName];
        return await handler.handle(request);
    }

    private GetTypeName(request: IRequestBase): string {
        return request.constructor.name;
    }
}

export const verticalSlice = new VerticalSlice();
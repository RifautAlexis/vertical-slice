import { Handler } from "./handler";
import { IRequestBase } from "./request";

class VerticalSlice {
    private handlers: Record<string, IRequestBase> = {};

    RegisterHandler<IRequestBase, TResponse>(request: IRequestBase, handler: Handler<IRequestBase, TResponse>): void {
        const requestName: string = this.GetTypeName(request);
        this.handlers[requestName] = handler;    
    }

    async ResolveHandler<IRequestBase, TResponse>(request: IRequestBase): Promise<TResponse> {
        const requestName: string = this.GetTypeName(request);
        const handler = <Handler<IRequestBase, TResponse>>this.handlers[`${requestName}`];
        return await handler.handle(request);
    }

    private GetTypeName(request: any): string {
        return request.constructor.name.toLowerCase();
    }
}

export const verticalSliceContainer = new VerticalSlice();
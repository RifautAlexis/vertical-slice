import { IRequest } from "./request";

export interface Handler<IRequestBase, TResponse> extends IRequest<TResponse> {
    handle(request: IRequestBase): Promise<TResponse>;
}
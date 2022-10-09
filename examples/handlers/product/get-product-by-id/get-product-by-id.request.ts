import { IRequest } from "../../../../src";
import { GetProductByIdResponse } from "./get-product-by-id.response";

export class GetProductByIdRequest implements IRequest<GetProductByIdResponse> {
    id!: string;

    constructor(request: Partial<GetProductByIdRequest> = {}) {
      Object.assign(this, request);
    }
}
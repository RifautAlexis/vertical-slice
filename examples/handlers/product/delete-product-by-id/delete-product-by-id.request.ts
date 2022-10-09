import { IRequest } from "../../../../src";
import { DeleteProductByIdResponse } from "./delete-product-by-id.response";

export class DeleteProductByIdRequest  implements IRequest<DeleteProductByIdResponse> {
    id!: string;

    constructor(request: Partial<DeleteProductByIdRequest> = {}) {
      Object.assign(this, request);
    }
}
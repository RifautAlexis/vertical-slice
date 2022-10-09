import { IRequest } from "../../../../src";
import { PatchProductResponse } from "./patch-product.response";

export class PatchProductRequest implements IRequest<PatchProductResponse> {
    id!: string;
    title!: string;
    description?: string;
    makerName?: string;
  
    constructor(request: Partial<PatchProductRequest> = {}) {
      Object.assign(this, request);
    }
}
import { IRequest } from "../../../../src";
import { CreateProductResponse } from "./create-product.response";

export class CreateProductRequest implements IRequest<CreateProductResponse> {
  title!: string;
  description!: string;
  content!: string;
  makerName!: string;

  constructor(request: Partial<CreateProductRequest> = {}) {
    Object.assign(this, request);
  }
}

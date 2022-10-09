import { IRequest } from "../../../../src";
import { PutProductResponse } from "./put-product.response";

export class PutProductRequest implements IRequest<PutProductResponse> {
    id!: string;
    title!: string;
    description!: string;
    makerName!: string;

    constructor(request: Partial<PutProductRequest> = {}){
        Object.assign(this, request);
    };
}
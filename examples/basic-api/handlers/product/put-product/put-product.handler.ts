import { PutProductRequest } from "./put-product.request";
import { PutProductResponse } from "./put-product.response";
import { verticalSlice, Handler } from "../../../../../src";

export class PutProductHandler implements Handler<PutProductRequest, PutProductResponse> {

    handle(request: PutProductRequest): Promise<PutProductResponse> {
        
        // Do logic and communication with DB here
        
        const result: PutProductResponse = {
            ...request,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}

const putProductHandler = new PutProductHandler();
verticalSlice.RegisterHandler<PutProductRequest, PutProductResponse>(new PutProductRequest, putProductHandler);
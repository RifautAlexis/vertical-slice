import { PutProductRequest } from "./put-product.request";
import { PutProductResponse } from "./put-product.response";
import { verticalSlice, IHandler } from "../../../../src";

export class PutProductHandler implements IHandler<PutProductRequest, PutProductResponse> {

    async handle(request: PutProductRequest): Promise<PutProductResponse> {
        
        // Do logic and communication with DB here
        
        const result: PutProductResponse = {
            ...request,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        
        return await new Promise(resolve => setTimeout(resolve, 5000));
    }

}

const putProductHandler = new PutProductHandler();
verticalSlice.registerHandler(PutProductRequest, putProductHandler);
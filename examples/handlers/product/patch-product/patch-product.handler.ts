import { PatchProductRequest } from "./patch-product.request";
import { PatchProductResponse } from "./patch-product.response";
import { verticalSlice, IHandler } from "../../../../src";

export class PatchProductHandler implements IHandler<PatchProductRequest, PatchProductResponse> {

    async handle(_request: PatchProductRequest): Promise<PatchProductResponse> {
        
        // Do logic and communication with DB here

        const result: PatchProductResponse = { }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const patchProductHandler = new PatchProductHandler();
verticalSlice.registerHandler(PatchProductRequest, patchProductHandler);
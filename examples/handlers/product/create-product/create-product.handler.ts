import { CreateProductRequest } from "./create-product.request";
import { CreateProductResponse } from "./create-product.response";
import { verticalSlice, IHandler } from "../../../../src";

export class CreateProductHandler implements IHandler<CreateProductRequest, CreateProductResponse> {

    async handle(request: CreateProductRequest): Promise<CreateProductResponse> {
        
        // Do logic and communication with DB here
        
        const result: CreateProductResponse = {
            id: '1',
            title: request.title,
            description: request.description,
            makerName: request.makerName,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const createProductHandler = new CreateProductHandler();
verticalSlice.registerHandler(CreateProductRequest, createProductHandler);
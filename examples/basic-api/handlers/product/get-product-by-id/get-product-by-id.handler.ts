import { GetProductByIdRequest } from "./get-product-by-id.request";
import { GetProductByIdResponse } from "./get-product-by-id.response";
import { verticalSlice, Handler } from "../../../../../src";

export class GetProductByIdHandler implements Handler<GetProductByIdRequest, GetProductByIdResponse> {

    handle(request: GetProductByIdRequest): Promise<GetProductByIdResponse> {
        
        // Do logic and communication with DB here
        
        const result: GetProductByIdResponse = {
            id: request.id,
            title: 'Title01',
            description: 'Description01',
            makerName: 'makerName01',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const getProductByIdHandler = new GetProductByIdHandler();
verticalSlice.RegisterHandler<GetProductByIdRequest, GetProductByIdResponse>(new GetProductByIdRequest, getProductByIdHandler);
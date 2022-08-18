import { DeleteProductByIdRequest } from "./delete-product-by-id.request";
import { DeleteProductByIdResponse } from "./delete-product-by-id.response";
import { verticalSlice, Handler } from "../../../../../src";

export class DeleteProductByIdHandler implements Handler<DeleteProductByIdRequest, DeleteProductByIdResponse> {

    handle(_request: DeleteProductByIdRequest): Promise<DeleteProductByIdResponse> {
        
        // Do logic and communication with DB here
        
        const result: DeleteProductByIdResponse = { }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const deleteProductByIdHandler = new DeleteProductByIdHandler();
verticalSlice.RegisterHandler<DeleteProductByIdRequest, DeleteProductByIdResponse>(new DeleteProductByIdRequest, deleteProductByIdHandler);
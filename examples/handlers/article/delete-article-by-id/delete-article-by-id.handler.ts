import { DeleteArticleByIdRequest } from "./delete-article-by-id.request";
import { DeleteArticleByIdResponse } from "./delete-article-by-id.response";
import { verticalSlice, IHandler } from "../../../../src";

export class DeleteArticleByIdHandler implements IHandler<DeleteArticleByIdRequest, DeleteArticleByIdResponse> {

    async handle(_request: DeleteArticleByIdRequest): Promise<DeleteArticleByIdResponse> {
        
        // Do logic and communication with DB here
        const result: DeleteArticleByIdResponse = { }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const deleteArticleByIdHandler = new DeleteArticleByIdHandler();
verticalSlice.registerHandler(DeleteArticleByIdRequest, deleteArticleByIdHandler);
import { DeleteArticleByIdRequest } from "./delete-article-by-id.request";
import { DeleteArticleByIdResponse } from "./delete-article-by-id.response";
import { verticalSlice, Handler } from "../../../../../src";

export class DeleteArticleByIdHandler implements Handler<DeleteArticleByIdRequest, DeleteArticleByIdResponse> {

    handle(_request: DeleteArticleByIdRequest): Promise<DeleteArticleByIdResponse> {
        
        // Do logic and communication with DB here
        const result: DeleteArticleByIdResponse = { }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const deleteArticleByIdHandler = new DeleteArticleByIdHandler();
verticalSlice.RegisterHandler<DeleteArticleByIdRequest, DeleteArticleByIdResponse>(new DeleteArticleByIdRequest, deleteArticleByIdHandler);
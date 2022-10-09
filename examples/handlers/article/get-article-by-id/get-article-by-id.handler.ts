import { GetArticleByIdRequest } from "./get-article-by-id.request";
import { GetArticleByIdResponse } from "./get-article-by-id.response";
import { verticalSlice, IHandler } from "../../../../src";

export class GetArticleByIdHandler implements IHandler<GetArticleByIdRequest, GetArticleByIdResponse> {

    async handle(request: GetArticleByIdRequest): Promise<GetArticleByIdResponse> {
        
        // Do logic and communication with DB here
        
        const result: GetArticleByIdResponse = {
            id: request.id,
            title: 'Title01',
            description: 'Description01',
            authorName: 'authorName01',
            createdAt: new Date(),
            updatedAt: new Date(),
            content: "I'm a content and really happy cause why I could not ?"
        }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const getArticleByIdHandler = new GetArticleByIdHandler();
verticalSlice.registerHandler(GetArticleByIdRequest, getArticleByIdHandler);
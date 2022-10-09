import { CreateArticleRequest } from "./create-article.request";
import { CreateArticleResponse } from "./create-article.response";
import { verticalSlice, IHandler } from "../../../../src";

export class CreateArticleHandler implements IHandler<CreateArticleRequest, CreateArticleResponse> {

    async handle(request: CreateArticleRequest): Promise<CreateArticleResponse> {
        
        // Do logic and communication with DB here
        
        const result: CreateArticleResponse = {
            id: '1',
            title: request.title,
            description: request.description,
            content: request.content,
            authorName: request.authorName,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const createArticleHandler = new CreateArticleHandler();
verticalSlice.registerHandler(CreateArticleRequest, createArticleHandler);
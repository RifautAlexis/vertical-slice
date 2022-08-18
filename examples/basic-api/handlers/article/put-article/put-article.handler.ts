import { PutArticleRequest } from "./put-article.request";
import { PutArticleResponse } from "./put-article.response";
import { verticalSlice, Handler } from "../../../../../src";

export class PutArticleHandler implements Handler<PutArticleRequest, PutArticleResponse> {

    handle(request: PutArticleRequest): Promise<PutArticleResponse> {
        
        // Do logic and communication with DB here
        
        const result: PutArticleResponse = {
            ...request,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}

const putArticleHandler = new PutArticleHandler();
verticalSlice.RegisterHandler<PutArticleRequest, PutArticleResponse>(new PutArticleRequest, putArticleHandler);
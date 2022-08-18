import { PatchArticleRequest } from "./patch-article.request";
import { PatchArticleResponse } from "./patch-article.response";
import { verticalSlice, Handler } from "../../../../../src";

export class PatchArticleHandler implements Handler<PatchArticleRequest, PatchArticleResponse> {

    handle(_request: PatchArticleRequest): Promise<PatchArticleResponse> {
        
        // Do logic and communication with DB here

        const result: PatchArticleResponse = { }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const patchArticleHandler = new PatchArticleHandler();
verticalSlice.RegisterHandler<PatchArticleRequest, PatchArticleResponse>(new PatchArticleRequest, patchArticleHandler);
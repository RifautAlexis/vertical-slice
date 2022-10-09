import { PatchArticleRequest } from "./patch-article.request";
import { PatchArticleResponse } from "./patch-article.response";
import { verticalSlice, IHandler } from "../../../../src";

export class PatchArticleHandler implements IHandler<PatchArticleRequest, PatchArticleResponse> {

    async handle(_request: PatchArticleRequest): Promise<PatchArticleResponse> {
        
        // Do logic and communication with DB here

        const result: PatchArticleResponse = { }
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}


const patchArticleHandler = new PatchArticleHandler();
verticalSlice.registerHandler(PatchArticleRequest, patchArticleHandler);
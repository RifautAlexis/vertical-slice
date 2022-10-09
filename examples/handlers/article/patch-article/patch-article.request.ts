import { IRequest } from "../../../../src";
import { PatchArticleResponse } from "./patch-article.response";

export class PatchArticleRequest implements IRequest<PatchArticleResponse> {
    id!: string;
    title!: string;
    description?: string;
    content?: string;
    authorName?: string;
  
    constructor(request: Partial<PatchArticleRequest> = {}) {
      Object.assign(this, request);
    }
}
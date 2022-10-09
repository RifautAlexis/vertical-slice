import { IRequest } from "../../../../src";
import { PutArticleResponse } from "./put-article.response";

export class PutArticleRequest implements IRequest<PutArticleResponse> {
    id!: string;
    title!: string;
    description!: string;
    content!: string;
    authorName!: string;

    constructor(request: Partial<PutArticleRequest> = {}){
        Object.assign(this, request);
    };
}
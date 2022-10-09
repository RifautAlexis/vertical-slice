import { IRequest } from "../../../../src";
import { GetArticleByIdResponse } from "./get-article-by-id.response";

export class GetArticleByIdRequest implements IRequest<GetArticleByIdResponse> {
    id!: string;

    constructor(request: Partial<GetArticleByIdRequest> = {}){
        Object.assign(this, request);
    };
}
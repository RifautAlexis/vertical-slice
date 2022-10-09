import { IRequest } from "../../../../src";
import { DeleteArticleByIdResponse } from "./delete-article-by-id.response";

export class DeleteArticleByIdRequest implements IRequest<DeleteArticleByIdResponse> {
    id!: string;

    constructor(request: Partial<DeleteArticleByIdRequest> = {}){
        Object.assign(this, request);
    };
}
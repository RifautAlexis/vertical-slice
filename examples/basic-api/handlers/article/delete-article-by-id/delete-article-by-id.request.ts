export class DeleteArticleByIdRequest {
    id!: string;

    constructor(request: Partial<DeleteArticleByIdRequest> = {}){
        Object.assign(this, request);
    };
}
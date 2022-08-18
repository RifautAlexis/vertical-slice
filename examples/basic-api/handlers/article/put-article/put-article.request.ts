export class PutArticleRequest {
    id!: string;
    title!: string;
    description!: string;
    content!: string;
    authorName!: string;

    constructor(request: Partial<PutArticleRequest> = {}){
        Object.assign(this, request);
    };
}
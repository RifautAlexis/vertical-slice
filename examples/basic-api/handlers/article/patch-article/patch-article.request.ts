export class PatchArticleRequest {
    id!: string;
    title!: string;
    description?: string;
    content?: string;
    authorName?: string;
  
    constructor(request: Partial<PatchArticleRequest> = {}) {
      Object.assign(this, request);
    }
}
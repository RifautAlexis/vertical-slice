export class CreateArticleRequest {
  title!: string;
  description!: string;
  content!: string;
  authorName!: string;

  constructor(request: Partial<CreateArticleRequest> = {}) {
    Object.assign(this, request);
  }
}

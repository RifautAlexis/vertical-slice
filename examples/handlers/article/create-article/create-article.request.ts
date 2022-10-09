import { IRequest } from "../../../../src";
import { CreateArticleResponse } from "./create-article.response";

export class CreateArticleRequest implements IRequest<CreateArticleResponse> {
  title!: string;
  description!: string;
  content!: string;
  authorName!: string;

  constructor(request: Partial<CreateArticleRequest> = {}) {
    Object.assign(this, request);
  }
}

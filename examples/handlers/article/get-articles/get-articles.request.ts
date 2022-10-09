import { IRequest } from "../../../../src";
import { GetArticlesResponse } from "./get-articles.response";

export class GetArticlesRequest implements IRequest<GetArticlesResponse[]> { }
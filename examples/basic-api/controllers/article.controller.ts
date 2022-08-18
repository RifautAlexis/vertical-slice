import { verticalSlice } from "../../../src";
import { createParamDecorator, Delete, Get, JsonController, Patch, Post, Put } from "routing-controllers";
import { CreateArticleRequest, CreateArticleResponse, DeleteArticleByIdRequest, DeleteArticleByIdResponse, GetArticleByIdRequest, GetArticleByIdResponse, GetArticlesRequest, GetArticlesResponse, PatchArticleRequest, PutArticleRequest, PutArticleResponse } from '../handlers/article/index'


@JsonController('/articles')
export class ArticleController {
    @Get('')
    async getOverview(@BuildRequest<GetArticlesRequest>(GetArticlesRequest) request: GetArticlesRequest): Promise<GetArticlesResponse[]> {
        return await verticalSlice.ResolveHandler<GetArticlesRequest, GetArticlesResponse[]>(request);
    }

    @Get('/:id')
    async getById(@BuildRequest<GetArticleByIdRequest>(GetArticleByIdRequest) request: GetArticleByIdRequest): Promise<GetArticleByIdResponse> {
        return await verticalSlice.ResolveHandler<GetArticleByIdRequest, GetArticleByIdResponse>(request);
    }

    @Post('')
    async create(@BuildRequest<CreateArticleRequest>(CreateArticleRequest) request: CreateArticleRequest): Promise<CreateArticleResponse> {
        return await verticalSlice.ResolveHandler<CreateArticleRequest, CreateArticleResponse>(request);
    }

    @Put('/:id')
    async updatePut(@BuildRequest<PutArticleRequest>(PutArticleRequest) request: PutArticleRequest): Promise<PutArticleResponse> {
        return await verticalSlice.ResolveHandler<PutArticleRequest, PutArticleResponse>(request);
    }

    @Patch('/:id/:title')
    async updatePatch(@BuildRequest<PatchArticleRequest>(PatchArticleRequest) request: PatchArticleRequest): Promise<PutArticleResponse> {
        return await verticalSlice.ResolveHandler<PatchArticleRequest, PutArticleResponse>(request);
    }

    @Delete('/:id')
    async delete(@BuildRequest<DeleteArticleByIdRequest>(DeleteArticleByIdRequest) request: DeleteArticleByIdRequest): Promise<DeleteArticleByIdResponse> {
        return await verticalSlice.ResolveHandler<DeleteArticleByIdRequest, DeleteArticleByIdResponse>(request);
    }
}

export function BuildRequest<T>(type: { new ({}): T }) {
    return createParamDecorator({
        required: false,
        value: action => {
            return new type({...action.context.params, ...action.request.body});
        },
    });
}
import { CreateProductRequest, CreateProductResponse, DeleteProductByIdRequest, DeleteProductByIdResponse, GetProductByIdRequest, GetProductByIdResponse, GetProductsRequest, GetProductsResponse, PatchProductRequest, PutProductRequest, PutProductResponse } from "../handlers/product";
import { Body, Delete, Get, JsonController, Param, Patch, Post, Put } from "routing-controllers";
import { verticalSlice } from "../../../src";

@JsonController('/products')
export class ProductController {
    @Get('')
    async getOverview(): Promise<GetProductsResponse[]> {
        return await verticalSlice.ResolveHandler<GetProductsRequest, GetProductsResponse[]>(new GetProductsRequest());
    }

    @Get('/:id')
    async getById(@Param('id') id: string): Promise<GetProductByIdResponse> {
        const request: GetProductByIdRequest = new GetProductByIdRequest({
            id: id
        });
        return await verticalSlice.ResolveHandler<GetProductByIdRequest, GetProductByIdResponse>(request);
    }

    @Post('')
    async create(@Body() newProduct: CreateProductRequest): Promise<CreateProductResponse> {
        const request: CreateProductRequest = new CreateProductRequest({
            ...newProduct
        });
        return await verticalSlice.ResolveHandler<CreateProductRequest, CreateProductResponse>(request);
    }

    @Put('/:id')
    async updatePut(
        @Param('id') id: string,
        @Body() request: {
            title: string,
            description: string,
            makerName: string,
        }
    ): Promise<PutProductResponse> {
        const productToUpdate: PutProductRequest = new PutProductRequest({
            id: id,
            ...request
        });
        return await verticalSlice.ResolveHandler<PutProductRequest, PutProductResponse>(productToUpdate);
    }

    @Patch('/:id/:title')
    async updatePatch(
        @Param('id') id: string,
        @Param('title') title: string,
        @Body() request?: {
            description?: string;
            makerName?: string;
        }
    ): Promise<PutProductResponse> {
        const productToUpdate: PatchProductRequest = new PatchProductRequest({
            id: id,
            title: title,
            ...request
        });
        return await verticalSlice.ResolveHandler<PatchProductRequest, PutProductResponse>(productToUpdate);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<DeleteProductByIdResponse> {
        const request: DeleteProductByIdRequest = new DeleteProductByIdRequest({
            id: id
        });
        return await verticalSlice.ResolveHandler<DeleteProductByIdRequest, DeleteProductByIdResponse>(request);
    }

}
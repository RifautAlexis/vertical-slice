
import { GetProductsResponse } from "./get-products.response"
import { GetProductsRequest } from "./get-products.request";
import { IHandler, verticalSlice } from "../../../../src";

export class GetProductsHandler implements IHandler<GetProductsRequest, GetProductsResponse[]> {

    async handle(_request: GetProductsRequest): Promise<GetProductsResponse[]> {
        
        // Do logic and communication with DB here
        
        const result: GetProductsResponse[] = [{
            id: '1',
            title: 'Title01',
            description: 'Description01',
            makerName: 'AuthorName01',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            title: 'Title02',
            description: 'Description02',
            makerName: 'AuthorName02',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '3',
            title: 'Title03',
            description: 'Description03',
            makerName: 'AuthorName03',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}

const getProductsHandler = new GetProductsHandler();
verticalSlice.registerHandler(GetProductsRequest, getProductsHandler);
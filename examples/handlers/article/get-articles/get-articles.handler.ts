
import { GetArticlesResponse } from "./get-articles.response"
import { GetArticlesRequest } from "./get-articles.request";
import { verticalSlice, IHandler } from "../../../../src";

export class GetArticlesHandler implements IHandler<GetArticlesRequest, GetArticlesResponse[]> {

    async handle(_request: GetArticlesRequest): Promise<GetArticlesResponse[]> {
        
        // Do logic and communication with DB here
        
        const result: GetArticlesResponse[] = [{
            id: '1',
            title: 'Title01',
            description: 'Description01',
            authorName: 'AuthorName01',
            content: 'Content 01',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            title: 'Title02',
            description: 'Description02',
            authorName: 'AuthorName02',
            content: 'Content 02',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '3',
            title: 'Title03',
            description: 'Description03',
            authorName: 'AuthorName03',
            content: 'Content 03',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]
        return new Promise(resolve => setTimeout(resolve, 5000)).then(() => result);
    }

}

const getArticlesHandler = new GetArticlesHandler();
verticalSlice.registerHandler(GetArticlesRequest, getArticlesHandler);
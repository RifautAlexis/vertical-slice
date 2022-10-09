# vertical-slice
The goal is not to reproduce MediatR from Jim Bogard. I wanted to easily handle : One entry point = one handler

# Installation
```
npm install vertical-slice
```

# Usage

## Controller
```
export class ProductController {
    @Get('')
    async getOverview(): Promise<GetProductsResponse[]> {
        return await verticalSlice.send<GetProductsResponse[]>(new GetProductsRequest());
    }
}
```

## Handler
```
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
```

Notice the two last lines. It allow to register the Handler in Vertical-slice. Whitout this your handler won't be usable.
Why not using a decorator ? It's about technical reasons. Using decorator to register a handler is less strongly typed than the method used.

## Request
```
export class GetProductsRequest implements IRequest<GetProductsResponse[]> { }
```

## Response
```
export interface GetProductsResponse {
    id: string;
    title: String;
    description: String;
    makerName: String;
    createdAt: Date;
    updatedAt: Date;
}
```

More examples [here](https://github.com/RifautAlexis/vertical-slice/tree/master/examples)

# Going further
Don't hesitate to open a discussion or a fork.
I tried to have a strongly typed system to automatically register Handlers without that the user have to call himself a function to register, I didn't succeed. One possible way is using reflection with decorator.

An interesting package for reflection in typescript is [tst-reflect](https://github.com/Hookyns/tst-reflect)

# Source
- https://github.com/jbogard/MediatR (but whitout CQRS pattern)
- https://github.com/hakant/TypeScriptCommandPattern
And many more

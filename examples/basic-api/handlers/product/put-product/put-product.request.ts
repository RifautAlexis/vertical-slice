export class PutProductRequest {
    id!: string;
    title!: string;
    description!: string;
    makerName!: string;

    constructor(request: Partial<PutProductRequest> = {}){
        Object.assign(this, request);
    };
}
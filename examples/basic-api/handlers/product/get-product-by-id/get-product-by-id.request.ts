export class GetProductByIdRequest {
    id!: string;

    constructor(request: Partial<GetProductByIdRequest> = {}) {
      Object.assign(this, request);
    }
}
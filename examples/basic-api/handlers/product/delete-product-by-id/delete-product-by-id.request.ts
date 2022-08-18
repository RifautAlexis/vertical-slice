export class DeleteProductByIdRequest {
    id!: string;

    constructor(request: Partial<DeleteProductByIdRequest> = {}) {
      Object.assign(this, request);
    }
}
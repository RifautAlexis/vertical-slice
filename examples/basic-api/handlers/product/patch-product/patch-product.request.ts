export class PatchProductRequest {
    id!: string;
    title!: string;
    description?: string;
    makerName?: string;
  
    constructor(request: Partial<PatchProductRequest> = {}) {
      Object.assign(this, request);
    }
}
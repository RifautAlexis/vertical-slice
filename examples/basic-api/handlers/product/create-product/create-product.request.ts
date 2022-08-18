export class CreateProductRequest {
  title!: string;
  description!: string;
  content!: string;
  makerName!: string;

  constructor(request: Partial<CreateProductRequest> = {}) {
    Object.assign(this, request);
  }
}

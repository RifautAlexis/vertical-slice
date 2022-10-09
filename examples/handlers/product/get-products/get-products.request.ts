import { IRequest } from "../../../../src";
import { GetProductsResponse } from "./get-products.response";

export class GetProductsRequest implements IRequest<GetProductsResponse[]> { }
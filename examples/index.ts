import { ArticleController } from "./controllers/article.controller";
import Koa from "koa";
import "reflect-metadata";
import { useKoaServer } from "routing-controllers";
import { ProductController } from "./controllers/product.controller";

const app = new Koa();

const port = 3000;

useKoaServer(app, {
  classTransformer: true,
  controllers: [
    ArticleController,
    ProductController
  ],
});

app
  .listen(port, async () => {
    console.log(`Koa server is running on port ${port}`);
  })
  .on("error", (err: Error) => {
    console.error(err);
  });

import  Koa from 'koa';
const app = new Koa();

app.use(ctx => {
    console.log(ctx.header);
    console.log(ctx.ip);
    ctx.body = 'Hello Koa';
});

app.listen(3000);

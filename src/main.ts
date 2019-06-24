import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bodyParser = require('body-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
 //app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true,}));
  await app.listen(3000);
}
bootstrap();

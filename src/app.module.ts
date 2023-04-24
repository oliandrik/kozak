import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KozaksModule } from './kozaks/kozaks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `127.0.0.1`,
      port: 3306,
      username: `root`,
      password: `Root`,
      database: `kozak`,
      synchronize: true,
      entities: [],
    }),
    KozaksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

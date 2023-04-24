import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KozaksController } from './controllers/kozaks.controller';
import { KozakEntity } from './entities/kozak.entity';

import { KozaksService } from './services/kozaks.service';

@Module({
  imports: [TypeOrmModule.forFeature([KozakEntity])],
  controllers: [KozaksController],
  providers: [KozaksService],
})
export class KozaksModule {}

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //This module is used Global
@Module({
  providers: [PrismaService],
  exports: [PrismaService] //other module can use PrismaService
})
export class PrismaModule {}

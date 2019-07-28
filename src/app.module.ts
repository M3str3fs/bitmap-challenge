import { Module } from '@nestjs/common';
import { BfsExampleModule } from './bfs-example/bfs-example.module';
import { BfsExampleController } from './bfs-example/bfs-example.controller';

@Module({
  imports: [BfsExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

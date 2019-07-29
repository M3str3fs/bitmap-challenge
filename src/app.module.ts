import { Module } from '@nestjs/common';
import { BfsExampleModule } from './bfs-example/bfs-example.module';



@Module({
  imports: [BfsExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { BfsExampleModule } from './bfs-example/bfs-example.module';
import { BfsExampleController } from './bfs-example/bfs-example.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [BfsExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

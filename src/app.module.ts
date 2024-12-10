/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';
import { PlacesController } from './maps/places/places.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MapsModule,ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController, PlacesController],
  providers: [AppService],
})
export class AppModule {}

/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MapsModule } from "./maps/maps.module";
import { PlacesController } from "./maps/places/places.controller";
import { PrismaModule } from "./prisma/prisma.module";
import { RoutesModule } from "./routes/routes.module";

@Module({
  imports: [
    MapsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    RoutesModule,
    PrismaModule,
  ],
  controllers: [AppController, PlacesController],
  providers: [AppService],
})
export class AppModule {}

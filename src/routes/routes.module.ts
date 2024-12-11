/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { RoutesController } from "./routes.controller";
import { RoutesService } from "./routes.service";
import { MapsModule } from "src/maps/maps.module";

@Module({
  imports:[MapsModule],
  controllers: [RoutesController],
  providers: [RoutesService],
})
export class RoutesModule {}

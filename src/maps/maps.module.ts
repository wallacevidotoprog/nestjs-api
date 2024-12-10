/* eslint-disable prettier/prettier */
import { Client as GoogleMapasClient } from "@googlemaps/google-maps-services-js";
import { Module } from "@nestjs/common";
import { PlacesController } from "./places/places.controller";
import { PlacesService } from "./places/places.service";
import { DirectionsController } from './directions/directions.controller';
import { DirectionsService } from './directions/directions.service';

@Module({
  controllers: [PlacesController, DirectionsController],
  providers: [
    PlacesService,
    {
      provide: GoogleMapasClient,
      useValue: new GoogleMapasClient(),
    },
    DirectionsService,
  ],
  exports: [PlacesService],
})
export class MapsModule {}

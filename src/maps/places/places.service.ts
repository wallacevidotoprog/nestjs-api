/* eslint-disable prettier/prettier */
import {
  Client as GoogleMapasClient,
  PlaceInputType,
} from "@googlemaps/google-maps-services-js";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PlacesService {
  constructor(
    private googleMapsClient: GoogleMapasClient,
    private configService: ConfigService,
  ) {}
  async findPlaces(text: string) {
    const { data } = await this.googleMapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ["place_id", "formatted_address", "geometry", "name"],
        key: this.configService.get("GOOGLE_MAPS_API_KEY"),
      },
    });
    return data;
  }
}

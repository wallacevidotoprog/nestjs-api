/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { PlacesService } from "./places.service";

describe("PlacesService", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: PlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesService],
    }).compile();

    service = module.get<PlacesService>(PlacesService);
  });

  // it("should be defined", () => {
  //   expect(service).toBeDefined();  });
});

import { TestBed, inject } from "@angular/core/testing";

import { QueryParamService } from "./queryparam.service";
import { SearchParam } from "./SearchParam";

describe("QueryparamgeneratorService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryParamService]
    });
  });

  it("should be created", inject(
    [QueryParamService],
    (service: QueryParamService) => {
      expect(service).toBeTruthy();
    }
  ));

  it("should generate query params", inject(
    [QueryParamService],
    (service: QueryParamService) => {
      let queryParams: SearchParam[];
      let param1: SearchParam;
      let param2: SearchParam;
      param1.key = "key1";
      param1.value = "value1";
      param2.key = "key2";
      param2.value = "value2";
      queryParams.push(param1);
      queryParams.push(param2);
    }
  ));
});

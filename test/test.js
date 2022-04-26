import { createMocks } from "node-mocks-http";
import handleAnimal from "../pages/api/mainapi";

describe("/api/mainapi", () => {
  test("returns a message with the specified animal", async () => {
    const { req, res } = createMocks({
      method: "GET",
      //   query: {
      //     _id: "145525555522",
      //   },
    });

    await handleAnimal(req, res);
    console.log(res._getStatusCode());
    expect(res._getStatusCode()).toBe(200);
  });
});

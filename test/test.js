import { createMocks } from "node-mocks-http";
import handleAnimal from "../pages/api/mainapi";
import handle1data from "../pages/api/[id]";

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

//post data
describe("/api/mainapi", () => {
  test("returns a message post", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        title: "abcd",
        todaydate: "2022/02/24",
        body: "test data",
        _id: "6268ba8f0f921775413c7d08",
      },
    });

    await handleAnimal(req, res);
    let { a } = res._getJSONData;
    console.log(a);
    expect(res._getStatusCode()).toBe(201);
  });
});

//post  error data
describe("/api/mainapi", () => {
  test("returns a message post", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        title: "abcd",
        body: "test data",
      },
    });

    await handleAnimal(req, res);
    console.log(res._getData);
    expect(res._getStatusCode()).toBe(400);
  });
});

//search 1 data api call
describe("/api/[id]", () => {
  test("returns a message 400 error", async () => {
    const { req, res } = createMocks({
      method: "GET",
      body: {
        _id: "145525555522",
      },
    });

    await handle1data(req, res);
    console.log(res._getStatusCode());
    expect(res._getStatusCode()).toBe(400);
  });
});
//Delete
describe("/api/[id]", () => {
  test(" DELETE data", async () => {
    const { req, res } = createMocks({
      method: "DELETE",
      query: {
        id: "6268ba8f0f921775413c7d08",
      },
    });

    await handle1data(req, res);
    console.log(res._getStatusCode());
    expect(res._getStatusCode()).toBe(200);
  });
});

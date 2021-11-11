import build from "app";
import { expect } from "chai";

describe("Debug endpoints", () => {
  it("home info is going fine", async () => {
    const app = await build({});
    const response = await app.inject({
      method: "GET",
      url: "/",
    });

    expect(response.statusCode).to.equal(200);
    expect(JSON.parse(response.body)).to.have.property("message");
    expect(JSON.parse(response.body)).to.have.property("version");
  });

  it("health check is going fine", async () => {
    const app = await build({});
    const response = await app.inject({
      method: "GET",
      url: "/health",
    });

    expect(response.statusCode).to.equal(200);
    expect(JSON.parse(response.body)).to.deep.equal({ status: "ok" });
  });

  it.skip("status is going fine", async () => {
    const app = await build({});
    const response = await app.inject({
      method: "GET",
      url: "/status",
    });

    expect(response.statusCode).to.equal(200);
    expect(JSON.parse(response.body)).to.deep.equal({
      status: "uninitialized",
    });
  });
});

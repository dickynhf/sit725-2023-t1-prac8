let expect = require("chai").expect;
let request = require("request");
let url = "http://localhost:3000/api/pokemon";
let pokemon = {
  title: "test-format-link-1",
  link: "test-format-link-1",
  path: "test-format-link-1",
  description: "test-format-link-1",
};

describe("test get all pokemon", function () {
  it("return status code of 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("return succeful message", function (done) {
    request(url, function (error, response, body) {
      console.log(body);
      body = JSON.parse(body);
      expect(body.message).to.contain("Successful");
      done();
    });
  });

  it("returns an array", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.data).to.be.a("array");
      done();
    });
  });
});

describe("test post a pokemon", function () {
  it("insert a pokemon to batabase", function (done) {
    request.post({ url: url, form: pokemon }, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.message).to.contain("Add");
      done();
    });
  });
});

describe("delete a pokemon", function () {
  it("delete a pokemon from batabase", function (done) {
    request.delete(
      { url: url, form: pokemon },
      function (error, response, body) {
        body = JSON.parse(body);
        expect(body.message).to.contain("removed");
        done();
      }
    );
  });
});

const { generateJWT } = require("../../services/jwt");
const config = require("config");
const jwt = require("jsonwebtoken");
describe("JWT Test snapshot", () => {
    test("should return access token with expiration time : 24 hours", () => {
        const token = generateJWT({
            _id: "asfvfgfrfd54wd51",
            name: "ezat elzalouy",
            email: "ezatelzalouy711@gmail.com",
        });
        expect(token).toBeDefined();
        const vals = jwt.verify(token, config.get("API_KEY"));
        expect(vals).toEqual(expect.objectContaining({ _id: "asfvfgfrfd54wd51", name: "ezat elzalouy", "email": "ezatelzalouy711@gmail.com" }));
    });
    test("Should retrun Error", () => {
        const token = generateJWT({});
        expect(token.message).toEqual("Access token must have at _id")
    })
});
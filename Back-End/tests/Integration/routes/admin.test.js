const request = require("supertest");
const { admins } = require("../../../models/admin");
const bcrypt = require("bcrypt");
const config = require("config");
let server;
describe("router > Admin routes", () => {
    // server is listening
    beforeEach(() => {
        server = require("../../../index");
    });
    // server closed && TestDb is removed
    afterEach(async() => {
        await server.close();
        await admins.remove({});
    });
    // IsLoginValid?
    test("Email and password are required", async() => {
        // HTTP request test
        const res = await request(server)
            .post("/api/admin/login")
            .send({})
            .set("accept", "applcation/json").expect(404);
        expect(res.status).toBe(404);
        expect(res.error.text).toBe("email and password are reuqired");
    });
    test("Should return 'Invalid Email or Password' if email are not valid", async() => {
        //HTTP request test
        const res = await request(server)
            .post("/api/admin/login")
            .send({ email: "ezatelzalouy711@gmail.com", password: "AS5B8T7X*EWEEM" })
            .set("accept", "application/json").expect(404);
        expect(res.status).toBe(404);
        expect(res.error.text).toBe("Invalid Email or Password");
    });
    test("Should return 'done' if email and password are correct", async() => {
        //Set Data to DB
        // let -> cannot be re-Declared again, Block scope { let } .
        let data = {
            email: "ezatelzalouy711@gmail.com",
            username: "ezat elzalouy",
            password: "AS5B8T7X*EWEEM",
            role: "all",
            gender: "male"
        };
        data.password = await bcrypt.hash(data.password, 10);
        const doc = new admins(data);
        await doc.save();
        // HTTP reuest test
        const res = await request(server)
            .post("/api/admin/login")
            .send({ email: "ezatelzalouy711@gmail.com", password: "AS5B8T7X*EWEEM" })
            .set("accept", "application/json").expect(200);
        expect(res.status).toBe(200);
        expect(res.text).toBe('done');
    });
});
const request = require("supertest")
const app = require("../app")
const { sequelize } = require("../models")
const { queryInterface } = sequelize

//lifecycle
afterAll((done) =>{
    queryInterface.bulkDelete("Products")
    .then(() =>{
        done()
    })
    .catch(err =>{
        done()
    })
})

describe("test endpoint POST", () =>{
    it("test create succes", (done) => {
        request(app)
        .post('/products')
        .set('access_token', access_token)
        .send({stock: 2, price: 50000, name: "baju tidur", description: "baju tidur anak-anak"})
        .then(response => {
            let {body, status} = response
            console.log(body)
            expect(status).toEqual(201)
            expect(body).toHaveProperty("id", expect.any(Number))
            expect(body).toHaveProperty("stock", 2)
            expect(body).toHaveProperty("price", 50000)
            expect(body).toHaveProperty("name", "baju tidur")
            expect(body).toHaveProperty("description", "baju tidur anak-anak")
            done()
        })
        .catch(err =>{
            console.log(err)
            done()
        })
    })
})
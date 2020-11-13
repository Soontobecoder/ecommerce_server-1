const request = require("supertest")
const app = require("../app")
const { sequelize } = require("../models")
const { queryInterface } = sequelize

//lifecycle
afterAll((done) =>{
    queryInterface.bulkDelete("Users")
    .then(() =>{
        done()
    })
    .catch(err =>{
        done()
    })
})

describe("test endpoint POST", () =>{
    it("test register succes", (done) => {
        request(app)
        .post('/register')
        .send({email: 'testing@mail.com', password:"123456"})
        .then(response => {
            let {body, status} = response
            console.log(body)
            expect(status).toEqual(201)
            expect(body).toHaveProperty("id", expect.any(Number))
            expect(body).toHaveProperty("email", "testing@mail.com")
            done()
        })
        .catch(err =>{
            console.log(err)
            done()
        })
    })
    it("test register email existed", (done) => {
        request(app)
        .post('/register')
        .send({email: 'testing@mail.com', password:"123456"})
        .then(response => {
            let {body, status} = response
            
            expect(status).toEqual(500)
            expect(body).toHaveProperty("message", "email must be unique")
            done()
        })
        .catch(err =>{
            console.log(err)
            done()
        })
    })
    it("test login succes", (done) => {
        request(app)
        .post('/login')
        .send({email: 'testing@mail.com', password:"123456"})
        .then(response => {
            let {body, status} = response
            console.log(body)
            expect(status).toEqual(201)
            expect(body).toHaveProperty("id", expect.any(Number))
            expect(body).toHaveProperty("email", "testing@mail.com")
            done()
        })
        .catch(err =>{
            console.log(err)
            done()
        })
    })
    it("test login failed", (done) => {
        request(app)
        .post('/login')
        .send({email: 'salah@mail.com', password:"123456"})
        .then(response => {
            let {body, status} = response
            console.log(body)
            expect(status).toEqual(500)
            expect(body).toHaveProperty("msg", expect.any(String))
            done()
        })
        .catch(err =>{
            console.log(err)
            done()
        })
    })
})
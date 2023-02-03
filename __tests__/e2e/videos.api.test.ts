import request from "supertest"
import {app} from "../../src";


describe('/hometask_01/api/videos',() => {
           it('expected 200' ,() => {
               request(app).get('/ht_01/api/testing/all-data').expect(204)
           })
})
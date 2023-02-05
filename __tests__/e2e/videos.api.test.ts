import request from "supertest"
import {app} from "../../src";


describe('/hometask_01/api/videos', () => {


    it('edit video and expect 200', async () => {
        await request(app).put('/hometask_01/api/videos/1')
            .send(
                {
                    title: "TestTitleName",
                    author: 'newAuthorName',
                    availableResolutions: ['720p'],
                    canBeDownloaded: true,
                    minAgeRestriction: 16,
                    publicationDate: '2023-02-03T16:44:06.228Z'
                }
            ).expect(200)
    })

    it('expected 200 and arr with created post', async () => {
        await request(app).get('/hometask_01/api/videos/1').expect(200).expect(res => {
            expect(res.body).toEqual(
                expect.objectContaining({
                    id: 1,
                    title: "TestTitleName",
                    author: "newAuthorName",
                    canBeDownloaded: true,
                    minAgeRestriction: 16,
                    createdAt: expect.any(String),
                    publicationDate: '2023-02-03T16:44:06.228Z',
                    availableResolutions: ['720p']
                })
            )
        })

    })

    it('expected 204', async () => {
        await request(app).delete('/hometask_01/api/videos/1').expect(204)
    })

    it('expected 200 and an empty arr', async () => {
        await request(app).get('/hometask_01/api/videos').expect(200, [])
    })


    it('expected 201', async () => {
        await request(app).post('/hometask_01/api/videos').send({
            title: "title_name",
            author: 'author_name'
        }).expect(201)
    })


    it('expected 200 and arr with created post', async () => {
        await request(app).get('/hometask_01/api/videos').expect(200).expect(res => {
            expect(res.body).toEqual(
                expect.objectContaining([{
                    id: expect.any(Number),
                    title: "title_name",
                    author: "author_name",
                    canBeDownloaded: false,
                    minAgeRestriction: null,
                    createdAt: expect.any(String),
                    publicationDate: expect.any(String),
                    availableResolutions: ['144p']
                }])
            )
        })

    })


    it('expected 204', async () => {
        await request(app).delete('/ht_01/api/testing/all-data').expect(204)
    })

    it('expected 200 and an empty arr', async () => {
        await request(app).get('/hometask_01/api/videos').expect(200, [])
    })

})
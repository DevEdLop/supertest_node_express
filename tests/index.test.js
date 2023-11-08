import indexRouter from "../src/routes/index.routes.js";
import request from "supertest";



describe('Prueba a indexRouter api index', () => {
    test('debe de regresar el texto "pong"', async () => {
        const response = await request(indexRouter).get('/ping').send()

        expect(response.text).toBe('pong')
        expect(response.status).toBe(200)

    })
    test('debe de regresar el json con la propiedad message', async () => {
        const response = await request(indexRouter).get('/task').send()
        const responseBody = JSON.parse(response.text)

        expect(responseBody).toEqual({
            message: "me invoque"
        })
        expect(response.status).toBe(200)

    })
})

describe('POST /task', () => {

    describe('Cuando se les envia title y descripcion', () => {

        const requestData = {
            title: "wapeando",
            descripcion: "baila"
        };

        test('debe responder con un status code 200', async () => {
            const response = await request(indexRouter).post('/task').send(requestData);
            expect(response.status).toBe(200);
        });


        test('debe responder contener el title y un id', async () => {
            const response = await request(indexRouter).post('/task').send(requestData);
            expect(response.body.id).toBeDefined();
            expect(response.body).toEqual(expect.objectContaining({
                title: expect.any(String)
            }));
        });
    })

    describe('cuando no se les envia title y descripcion', () => {

        const cases = [
            {},
            { title: '' },
            { descripcion: '' },
        ]

        for (const body of cases) {
            test('debe responder con un 400', async () => {
                await request(indexRouter)
                    .post('/task')
                    .send(body)
                    .expect(400)
            })
        }
    })


})


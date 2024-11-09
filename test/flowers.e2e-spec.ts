import { INestApplication, ValidationPipe } from "@nestjs/common";
import { TestingModule, Test } from "@nestjs/testing";
import * as request from 'supertest';
import { AppModule } from "../src/app.module";

describe('FlowersController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    it('/flowers (GET)', () => {
        return request(app.getHttpServer())
            .get('/flowers')
            .expect(200)
            .expect([
                {
                    id: 1,
                    name: "almas",
                    color: "red",
                    price: 2.1,
                    createdAt: "2024-09-14T15:58:26.687Z",
                    updatedAt: "2024-09-14T15:58:26.687Z",
                },
                {
                    id: 2,
                    name: "almas",
                    color: "red",
                    price: 2.1,
                    createdAt: "2024-09-14T15:58:56.457Z",
                    updatedAt: "2024-09-14T15:58:56.457Z",
                },
            ]);
    });

    it('/flowers (POST)', () => {
        return request(app.getHttpServer())
            .post('/flowers')
            .send({
                name: 'SunFlower',
                color: 'Yellow',
                price: '8',
            })
            .expect(201)
            .expect(response => {
                console.log(response.body);
                return response.body.name === 'SunFlower';
            });
    });

    afterAll(async () => {
        await app.close();
    });
});

import { Matchers, PactV3 } from '@pact-foundation/pact';
import path from 'node:path';
import process from 'node:process';
import axios from 'axios';

describe('Suite B', () => {

    let provider: any;

    beforeEach(() => {
        provider = new PactV3({
            consumer: 'frontend',
            provider: 'backend',
            dir: path.join(process.cwd(), 'dist', 'pact', 'B'),
            logLevel: 'error',
            host: '127.0.0.1',
            port: 5395,
        });
    });

    it('Test B', async () => {
        provider.addInteraction({
            states: [{description: `state B`}],
            uponReceiving: `a GET request`,
            withRequest: {
                method: 'GET',
                path: `/api/frontend/v1/a`,
                headers: {Accept: 'application/json, text/plain, */*'}
            },
            willRespondWith: {
                status: 200,
                body: Matchers.somethingLike(
                    {test: true}
                )
            }
        });

        await provider.executeTest(() => {
            return axios.get(`http://127.0.0.1:5395/api/frontend/v1/a`)
                .then(response => {
                    expect(response.status).toBe(200);
                });
        });
    });
});

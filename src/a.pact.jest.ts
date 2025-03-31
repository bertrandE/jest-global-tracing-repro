import { PactV3 } from '@pact-foundation/pact';
import path from 'node:path';
import process from 'node:process';
import axios from 'axios';

describe('Suite A', () => {

    let provider: any;

    beforeEach(() => {
        provider = new PactV3({
            consumer: 'frontend',
            provider: 'backend',
            dir: path.join(process.cwd(), 'dist', 'pact', 'A'),
            logLevel: 'error',
            host: '127.0.0.1',
            port: 5395,
        });
    });

    it('Test A', async () => {
        provider.addInteraction({
            states: [{description: 'state A'}],
            uponReceiving: 'a POST request',
            withRequest: {
                method: 'POST',
                path: `/api/frontend/v1/a`,
                headers: {Accept: 'application/json, text/plain, */*'},
                body: {body: 'mock'}
            },
            willRespondWith: {
                status: 200,
                body: {test: true}
            }
        });

        await provider.executeTest(() => {
            return axios.post(`http://127.0.0.1:5395/api/frontend/v1/a`, {body: 'mock'})
                .then(response => {
                    expect(response.status).toBe(200);
                });
        });
    });
});

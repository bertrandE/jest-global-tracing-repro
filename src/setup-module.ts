import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export let httpClient: HttpClient;

beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ]
    });

    httpClient = TestBed.inject(HttpClient);
});
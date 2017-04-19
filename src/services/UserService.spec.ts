import { UserService } from './UserService';
import { Observable } from 'rxjs/Observable';
import { Http, BaseRequestOptions, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import 'rxjs/add/operator/map';
import { TestBed, getTestBed, async, inject } from '@angular/core/testing';

describe('User Service', () => {

  const mockResponse = {
    access_token: 'asdfadsf',
    expires_in: 3600,
    token_type: 'Bearer',
    scope: 'read write',
    refresh_token: '12345'
  };

  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers: [UserService,
                  Http,
                  BaseRequestOptions,
                  MockBackend,
                  {
                    deps: [MockBackend, BaseRequestOptions],
                    provide: Http,
                    useFactory:
                      (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                      }
                  }]
    });
  });

  function setupConnections(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
      if (connection.request.url === '/api/o/token') {
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);

        connection.mockRespond(response);
      }
    });
  }

  it('should create a service', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should return response', inject([UserService, MockBackend], (service: UserService, backend: MockBackend) => {
    const response = new ResponseOptions({
      body: JSON.stringify(mockResponse)
    });

    const baseResponse = new Response(response);

    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(baseResponse);
    });

    return service.login('admin', 'password').subscribe(data => {
      expect(data).toEqual(mockResponse);
    });
  }));

});

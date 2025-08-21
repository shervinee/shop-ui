import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private http = Inject(HttpClient);

  probesBasicAuth(basicToken: string) {
    const headers = new HttpHeaders({ Authorization: basicToken });
    return this.http.get('/api/health', { headers });
  }
}

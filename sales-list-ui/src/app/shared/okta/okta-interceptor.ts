import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {OktaAuthService} from "@okta/okta-angular";
import {from, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class OktaInterceptor implements HttpInterceptor {
  constructor(private oktaAuth: OktaAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    //allow only known domains
    if (OktaInterceptor.isAllowedDomain(request) > -1) {
      const accessToken = await this.oktaAuth.getAccessToken();
      request = OktaInterceptor.setAuthorizationHeader(request, accessToken);
    }
    return next.handle(request).toPromise();
  }

  private static setAuthorizationHeader(request: HttpRequest<any>, accessToken) {
    return request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  }

  private static isAllowedDomain(request: HttpRequest<any>) {
    return request.urlWithParams.indexOf('localhost');
  }
}

import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { JwtService, ResponseModel } from "src/auth/jwtService";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class AjaxService {
  IsTokenByPass: boolean = true;

  constructor(
    private tokenHelper: JwtService,
    private http: HttpClient
  ) {
    if (environment.production) {
      console.log(`[Bottomhalf]: BiPortal Running on ${environment.env}`);
    } else {
      console.log("[Bottomhalf]: BiPortal Running on localhost");
    }
  }

  public GetImageBasePath() {
    let ImageBaseUrl = environment.baseUrl.replace("/api", "/Files");
    return ImageBaseUrl;
  }

  LoadStaticJson(StaticUrl: string): Observable<any> {
    let JsonData = this.http.get(StaticUrl);
    return JsonData;
  }

  get(Url: string, IsLoaderRequired: boolean = true): Promise<ResponseModel> {
    return new Promise((resolve, reject) => {
      if (IsLoaderRequired) {
      } else {
      }
      return this.http
        .get(environment.baseUrl + Url, {
          observe: "response"
        })
        .subscribe(
          (res: any) => {
            if (this.tokenHelper.IsValidResponse(res.body)) {
              resolve(res.body);
            } else {
              resolve(null);
            }
          },
          (e: HttpErrorResponse) => {
            this.tokenHelper.HandleResponseStatus(e);
            reject(e.error);
          });
    });
  }

  post(Url: string, Param: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.baseUrl + Url, Param, {
          observe: "response"
        })
        .subscribe(
          (res: HttpResponse<any>) => {
            try {
              if (!this.tokenHelper.IsValidResponse(res.body)) {
                reject(null);
              }
            } catch (e) {
              reject(null);
            }
            resolve(res.body);
          },
          (e: HttpErrorResponse) => {
            this.tokenHelper.HandleResponseStatus(e);
            reject(e.error);
          }
        );
    });
  }

  put(Url: string, Param: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .put(environment.baseUrl + Url, Param, {
          observe: "response"
        })
        .subscribe(
          (res: HttpResponse<any>) => {
            try {
              if (!this.tokenHelper.IsValidResponse(res.body)) {
                reject(null);
              }
            } catch (e) {
              reject(e);
            }
            resolve(res.body);
          },
          (e: HttpErrorResponse) => {
            this.tokenHelper.HandleResponseStatus(e);
            reject(e.error);
          }
        );
    });
  }

  postRequest(Url: string, Param: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(Url, Param, {
          observe: "response"
        })
        .subscribe(
          (res: HttpResponse<any>) => {
            resolve(res.body);
          },
          (e: HttpErrorResponse) => {
            this.tokenHelper.HandleResponseStatus(e);
            reject(e.error);
          }
        );
    });
  }

  delete(Url: string, Param?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.baseUrl + Url, {
        headers: {
          observe: "response",
        },
        body: Param
      })
        .subscribe(
          (res: any) => {
            try {
              if (!this.tokenHelper.IsValidResponse(res)) {
                reject(null);
              }
            } catch (e) {
              reject(e);
            }
            resolve(res);
          },
          (e: HttpErrorResponse) => {
            this.tokenHelper.HandleResponseStatus(e);
            reject(e.error);
          }
        );
    });
  }

  login(Url: string, Param: any): Promise<ResponseModel> {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.baseUrl + Url, Param, {
          observe: "response"
        })
        .subscribe(
          (res: HttpResponse<any>) => {
            try {
              if (this.tokenHelper.IsValidResponse(res.body)) {
                let loginData: ResponseModel = res.body;
                if (this.tokenHelper.setLoginDetail(loginData.ResponseBody)) {
                  resolve(res.body);
                } else {
                  resolve(null);
                }
              } else {
                reject(null);
              }
            } catch (e) {
              reject(e);
            }
          },
          (e: HttpErrorResponse) => {
            this.tokenHelper.HandleResponseStatus(e);
            reject(e.error);
          }
        );
    });
  }

  upload(Url: string, Param: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.baseUrl + Url, Param, {
          observe: "response"
        })
        .subscribe(
          (res: HttpResponse<any>) => {
            try {
              if (!this.tokenHelper.IsValidResponse(res.body)) {
                reject(null);
              }
            } catch (e) {
              reject(e);
            }
            resolve(res.body);
          },
          (e: HttpErrorResponse) => {
            this.tokenHelper.HandleResponseStatus(e);
            reject(e.error);
          }
        );
    });
  }
}
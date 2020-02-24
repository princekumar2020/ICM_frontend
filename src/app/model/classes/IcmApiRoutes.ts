import { environment } from 'src/environments/environment';
import { IcmUrl } from 'src/app/api-url/icm-url';

export class IcmApiRoutes {
    private static baseUrl = environment.BASE_URL;

    static getLoginUrl(): string {
        return this.baseUrl + IcmUrl.LOGIN;
    }

    static getNewPageUrl(): string {
        return this.baseUrl + IcmUrl.LOGIN;
    }
}
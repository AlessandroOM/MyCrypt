import { SafeResourceUrl } from '@angular/platform-browser';

export class news {
    Id! : string;
    Title! : string;
    News!  : string;
    ImgUrl! : string;
    ImgUrlSecure! : SafeResourceUrl;
    CreatedAt! : Date

    constructor() {
        this.Id = "";
        this.Title = "";
        this.News = "";
        this.CreatedAt = new Date();
        this.ImgUrl = "";
        this.ImgUrlSecure  = "";
    }

}
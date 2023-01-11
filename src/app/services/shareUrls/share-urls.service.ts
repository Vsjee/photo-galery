import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareUrlsService {
  private infoSubjet: BehaviorSubject<string> = new BehaviorSubject('test');

  getIformation() {
    return this.infoSubjet.asObservable();
  }

  setInformation(info: string) {
    this.infoSubjet.next(info);
  }
}

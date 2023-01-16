import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageProjectService {

  urlp: string = "";

  constructor(private storage: Storage) { }

  public uploadImgProj($event: any, name: string) {
    const file = $event.target.files[0]
    console.log(file)
    const imgRef = ref(this.storage, `project/` + name);
    uploadBytes(imgRef, file)
    .then(response => {this.getImgProj()})
    .catch(error => console.log(error))
  }

  getImgProj() {
    const imageRef = ref(this.storage, 'project')
    list(imageRef)
    .then(async response => {
      for(let item of response.items) {
        this.urlp = await getDownloadURL(item);
        console.log("url proyecto cargada");
      }
    })
    .catch(error => console.log(error))

  }
}

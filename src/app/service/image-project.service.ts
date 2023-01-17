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
      this.urlp = await getDownloadURL(response.items[response.items.length -1]);
      console.log("url proyecto cargada " + this.urlp);
    })
    .catch(error => console.log(error))

  }

  public uploadImageProjEdit($event: any, name: string, id: number) {
    const file = $event.target.files[0]
    console.log(file)
    const imgRef = ref(this.storage, `project/` + name);
    uploadBytes(imgRef, file)
    .then(response => {this.getImgEdit(id)})
    .catch(error => console.log(error))
  }

  getImgEdit(id: number) {
    const imageRef = ref(this.storage, 'project')
    list(imageRef)
    .then(async response => {
      this.urlp = await getDownloadURL(response.items[id-1]);
      console.log("url proyecto cargada " + this.urlp);
    })
    .catch(error => console.log(error))

  }

}

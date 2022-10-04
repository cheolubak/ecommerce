import Firebase from './Firebase';
import { ref, getDownloadURL } from 'firebase/storage';

class Storage extends Firebase {
  static fetchImage(parent: string, path: string) {
    return getDownloadURL(ref(this.storage, `${parent}/${path}`));
  }
}

export default Storage;

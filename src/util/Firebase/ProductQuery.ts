import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  enableMultiTabIndexedDbPersistence,
} from 'firebase/firestore';
import { Product } from '../../models/Product';
import Firestore from './Firestore';

class ProductQuery extends Firestore {
  static converter = <T>() => ({
    toFirestore: (data: T) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  });

  static async fetchFavoriteProducts() {
    await enableMultiTabIndexedDbPersistence(this.db);
    const productRef = collection(this.db, 'product').withConverter(
      this.converter<Product>()
    );
    const q = query(productRef, orderBy('satisfaction', 'desc'), limit(5));
    return getDocs(q);
  }

  static async fetchNewestProduct() {
    await enableMultiTabIndexedDbPersistence(this.db);
    const productRef = collection(this.db, 'product').withConverter(
      this.converter<Product>()
    );
    const q = query(productRef, orderBy('updatedAt', 'desc'), limit(5));
    return getDocs(q);
  }
}

export default ProductQuery;

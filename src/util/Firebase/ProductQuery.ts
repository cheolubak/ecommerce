import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { Product } from '../../models/Product';
import Firestore from './Firestore';

class ProductQuery extends Firestore {
  static converter = <T>() => ({
    toFirestore: (data: T) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  });

  static fetchFavoriteProducts() {
    const productRef = collection(this.db, 'product').withConverter(
      this.converter<Product>()
    );
    const q = query(productRef, orderBy('satisfaction', 'desc'), orderBy('updatedAt', 'desc'), limit(5));
    return getDocs(q);
  }

  static fetchRecentProduct() {
    const productRef = collection(this.db, 'product').withConverter(
      this.converter<Product>()
    );
    const q = query(productRef, orderBy('updatedAt', 'desc'), orderBy('satisfaction', 'desc'), limit(5));
    return getDocs(q);
  }
}

export default ProductQuery;

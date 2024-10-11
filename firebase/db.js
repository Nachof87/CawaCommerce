import { 
    getFirestore
    ,collection
    ,getDocs
    ,query
    ,where
    ,doc
    ,getDoc
    ,addDoc
} from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

export const getProducts = async (setProducts) => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []

    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    })

    setProducts(products)
}

export const getProductsFromCategory = async (category , setProducts) => {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []
    
    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    })

    setProducts(products)
}

export const getProduct = async (id, setProduct) => {
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      setProduct(docSnap.data())
    } 
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const products = []
    const uniqueCategories = []

    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    })
    
    products.map(item => {
    if (uniqueCategories.indexOf(item.category) === -1) {
        uniqueCategories.push(item.category)
    }
    })

    return uniqueCategories
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        return docRef.id
      } catch (e) {
        console.error("Error adding document: ", e)
      }
}
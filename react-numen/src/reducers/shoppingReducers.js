import { TYPES } from "../components/actions/ShoppingCartActions"

export const shoppingInitialState = {
    products: [
        { id: 1, name: "Pagina Web", price: 2000, description: "Creacion de una pagina Web adaptada para dispositivos moviles y ordenador" },
        { id: 2, name: "App Android", price: 1500, description: "Creacion de una aplicacion movil para sistema operativo Android" },
        { id: 3, name: "App IOS", price: 1500, description: "Creacion de una aplicacion movil para sistema operativo IOS " },
        { id: 4, name: "App Android & IOS", price: 2800, description: "Creacion de una aplicacion movil para sistema operativo Android & IOS " },
        { id: 5, name: "Pagina Web & App Movile", price: 4500, description: "Creacion de una pagina Web y una aplicacion para dispositivos moviles" }
    ],
    cart: []
}

export const shoppingReducer = (state, action) => {
    switch (action.type) {
        //dentro de state.product busca aquel producto igual al seleccionado, para despues retornar,agarra el estado actual de cart y agrega el nuevo item
        case TYPES.ADD_TO_CART: {
            let newProduct = state.products.find((product) => product.id === action.payload.id);
            let productInCart = state.cart.find((product) => product.id === action.payload.id);
            console.log(newProduct,"nuevo");
            console.log(productInCart,);
            // return productInCart
            //     ? {
            //         ...state,
            //         cart: state.cart.map((product) =>
            //             product.id === newProduct.id
            //                 ? { ...product, quantity: product.quantity + 1 }
            //                 : product
            //         ),
            //     }
                return{
                    ...state,
                    cart: [...state.cart, { ...newProduct, quantity: 1 }]
                };
        }


        case TYPES.REMOVE_ONE_PRODUCT: {
            let productToDelete = state.cart.find((product) => product.id === action.payload);
            return productToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((product) =>
                        product.id === action.payload
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter(product => product.id !== action.payload)
                };
        }

        case TYPES.REMOVE_ALL_PRODUCTS: {
            let pepe = state.cart.filter(product => product.id !== action.payload);
            return {
                ...state,
                cart: pepe
            }


        }

        case TYPES.CLEAR_CART: {
            return {
                ...state,
                cart: []
            }
        }

        case TYPES.ADD_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        default:
            return state;
    }
}
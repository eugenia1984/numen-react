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
        case TYPES.ADD_TO_CART: { }
        case TYPES.CLEAR_CART: { }
        case TYPES.REMOVE_PRODUCT: { }
        default:
            return state;
    }
}
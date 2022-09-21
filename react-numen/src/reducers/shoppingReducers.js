import { TYPES } from "../components/actions/ShoppingCartActions"

export const shoppingInitialState = {
    products: [
        { id: 1, name: "Pagina Web", price: 2000 },
        { id: 2, name: "App Android", price: 1500 },
        { id: 3, name: "App Ios", price: 1500 },
        { id: 4, name: "App Android & Ios", price: 2800 },
        { id: 5, name: "Pagina Web & App Movile", price: 4500 }
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
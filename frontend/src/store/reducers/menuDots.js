import {TOGGLE_MENU_DOTS} from '../types/menuDots';

const initialState = {
    isMenuDotsOpen: false
}
const toggleMenuDots = (state=initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_MENU_DOTS:
            return {
                ...state,
                isMenuDotsOpen: payload
            }
        default:
            return state;
    }
}

export default toggleMenuDots
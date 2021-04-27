import {
    TOGGLE_MENU_DOTS
} from '../types/menuDots';


export const toggleMenuDots = (option) => {
    return {
        type: TOGGLE_MENU_DOTS,
        payload: option
    }
}
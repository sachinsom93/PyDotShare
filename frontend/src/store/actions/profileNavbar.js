import {
    NOTEBOOKS,
    RECENT_NOTEBOOKS,
    LIKED_NOTEBOOKS,
    SAVED_NOTEBOOKS
} from '../types/profileNavbar';


export const notebooks = () => {
    return {type: NOTEBOOKS}
}

export const recent_notebooks = () => {
    return {type: RECENT_NOTEBOOKS}
}

export const liked_notebooks = () => {
    return {type: LIKED_NOTEBOOKS}
}

export const saved_notebooks = () => {
    return {type: SAVED_NOTEBOOKS}
}
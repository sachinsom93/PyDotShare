import {
    NOTEBOOKS,
    RECENT_NOTEBOOKS,
    LIKED_NOTEBOOKS,
    SAVED_NOTEBOOKS
} from '../types/profileNavbar';

const initialState = 'recent';

const profileNavbar = (state=initialState, {type, payload}) => {
    switch (type) {
        case NOTEBOOKS:
            return 'notebooks'
        case RECENT_NOTEBOOKS:
            return 'recent'
        case LIKED_NOTEBOOKS:
            return 'liked'
        case SAVED_NOTEBOOKS:
            return 'saved'
        default:
            return state
    }
}

export default profileNavbar
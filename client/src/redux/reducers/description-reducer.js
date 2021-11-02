const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

const initialState = {
    descriptionText: '',
    description: [
        // {
        //     title: 'Installation',
        //     description: 'Short description',
        //     avatar: 'https://joeschmoe.io/api/v1/random'
        // },
        // {
        //     title: 'Getting started',
        //     description: 'Short description',
        //     avatar: 'https://joeschmoe.io/api/v1/random'
        // },
        // {
        //     title: 'Features',
        //     description: 'Short description',
        //     avatar: 'https://joeschmoe.io/api/v1/random'
        // },
        // {
        //     title: 'Reviews',
        //     description: 'Short description',
        //     avatar: 'https://joeschmoe.io/api/v1/random'
        // },
    ]
}

const descriptionReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DESCRIPTION:
            const descObj = {
                title: 'New description',
                description: state.descriptionText,
                avatar: 'https://joeschmoe.io/api/v1/random'
            }

            return {
                ...state,
                descriptionText: '',
                description: [...state.description, descObj]
            }
        case UPDATE_DESCRIPTION:
            return {
                ...state,
                descriptionText: action.newText
            }
        default:
            return state
    }
}

export const addDescriptionActionCreator = () => ({type: ADD_DESCRIPTION})
export const updateDescriptionActionCreator = (text) => ({type: UPDATE_DESCRIPTION, newText: text})

export default descriptionReducer
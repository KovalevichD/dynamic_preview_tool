import createCodeSnippetsReducer from "./reducers/createCodeSnippetsReducer";

const store = {
    _state: {
        descriptionText: '',
        description: [
            {
                title: 'Installation',
                description: 'Short description',
                avatar: 'https://joeschmoe.io/api/v1/random'
            },
            {
                title: 'Getting started',
                description: 'Short description',
                avatar: 'https://joeschmoe.io/api/v1/random'
            },
            {
                title: 'Features',
                description: 'Short description',
                avatar: 'https://joeschmoe.io/api/v1/random'
            },
            {
                title: 'Reviews',
                description: 'Short description',
                avatar: 'https://joeschmoe.io/api/v1/random'
            },
        ]
    },
    _callSubscriber() {
        console.log('subscribed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state = createCodeSnippetsReducer(this._state, action)

        this._callSubscriber(this._state)
    }
};

export default store;
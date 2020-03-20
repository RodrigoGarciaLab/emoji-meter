export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_EMOJI_DATA':
            return {
                data: action.payload
            }
        default:
            return state
    }
}

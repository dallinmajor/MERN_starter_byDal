export default (state = null, action) => {

    console.log(state);
    switch (action.type) {
        case 'SET_USER':
            return action.payload
            // eslint-disable-next-line
            break;
        default:
            return state
    }
}
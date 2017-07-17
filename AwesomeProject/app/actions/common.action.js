export function changeData() {
    return {
        type: 'CHANGE_DATA',
        payload: {
            val: new Date().getUTCMilliseconds()
        }
    }
}

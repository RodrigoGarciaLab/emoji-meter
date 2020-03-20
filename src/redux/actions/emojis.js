export const fetchEmojiData = () => dispatch => {
    dispatch({
        type: 'FETCH_EMOJI_DATA',
        payload: convertToPieData(groupBy(mockData, item => item.emoji))
    })
};

function groupBy(list, keyGetter) {
    const map = {};
    list.forEach((item) => {
        const key = keyGetter(item);
        if (!map[key]) {
            map[key] = 1;
        } else {
            map[key] =map[key] + 1;
        }
    });
    return map;
}

const convertToPieData = rawData => (
    Object.keys(rawData).map(key => ({
        id: key,
        label: key,
        value: rawData[key],
        color: getRandomColor()
    }))
);

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const mockData = [
    {'timestamp': '1584726583.032600', 'emoji': 'partyparrot', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'poop', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'partyparrot', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'poop', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'partyparrot', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'poop', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'poop', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'joy', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'partyparrot', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'partyparrot', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
    {'timestamp': '1584726583.032600', 'emoji': 'joy', 'message_reacted': 'U010237PXRQ', 'slack_channel': 'G010F18VD08', 'slack_user': 'UG56M63A9'},
];

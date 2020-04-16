const generateMessage = (username, text) => {
    return {
        username,
        text,
        createAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, locationObject) => {
    return {
        username,
        locationLink: `https://google.com/maps?q=${locationObject.latitude},${locationObject.longitude}`,
        createAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}
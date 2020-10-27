exports.handler = async function (event, context) {

    const requestBody;
    try {
        requestBody = JSON.parse(event.body);
    } catch (exception) {
        requestBody = null;
    }

    const message = requestBody ? requestBody.message : null;

    if (!message) {
        return {
            statusCode: 400,
            body: "Envoie un message frr",
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: message }),
    };
};

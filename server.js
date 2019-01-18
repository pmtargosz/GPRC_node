// server.js
const path = require('path');
const Mali = require('mali');

// Defines the path to a proto file thhat will hold the service definition
const PROTO_PATH = path.resolve(__dirname, './protos/hello.proto');

/**
 * Handler for the Echo PRC.
 * @param {object} ctx The request context provided by Mali
 * @returns {Promise<void>}
 */
const echo = async ctx => {
    //Log that we received the request
    console.log('Received request.');

    // Set the response on the context
    ctx.res = {
        // Definr the message and time
        message: ctx.request.req.message,
        timestamp: Date.now()
    };
};

/**
 * Define the main entry point for the application.
 * From here, we stand up the server and do some light logging.
 */
const main = () => {
    /**
     * Create a new instance of the Mali server.
     * We pass in the path to our Protocol Buffer definition,
     * and provide a friendly name for the service.
     * @type {Mali}
     */
    const app = new Mali(PROTO_PATH, 'Hello', {
        // These are gPRC native options that Mali passes down
        // to the underlying gPRC loader.
        defaults: true
    });

    // Create a listener for the Echo PRC using the echo function
    // as the handler.

    app.use({ echo });

    // Start listening on localhost
    app.start('127.0.0.1:50051');

    // Log out that we're listening and ready for connections
    console.log('Listenning...');
};

// Start the service and listen for connections
main();

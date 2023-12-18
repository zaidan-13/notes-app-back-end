/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable space-before-blocks */
const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, { service }) => {
        const notesHandler = new NotesHandler(service);
        server.route(routes(notesHandler));
    },
};

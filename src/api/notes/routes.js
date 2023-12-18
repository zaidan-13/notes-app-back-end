/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
const routes = (handler) => [
    {
      method: 'POST',
      path: '/notes',
      handler: handler.postNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: handler.getNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: handler.getNoteByIdHandler,
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: handler.putNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: handler.deleteNoteByIdHandler,
    },
  ];
  module.exports = routes;

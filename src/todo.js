module.exports.handler = (event, context, done) => {
  console.log('Context: ', context);
  const todo_list = [
    { id: 1, name: 'Clean up', status: 'open' },
    { id: 2, name: 'cook', status: 'done' }
  ];
  const requestID = parseInt(event.pathParameters.id);
  const todo = todo_list.find(item => item.id === requestID);
  done(null, {
    statusCode: 200,
    body: JSON.stringify({ data: todo })
  })
};

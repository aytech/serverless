module.exports.handler = (event, context, done) => {
  const todo_list = [
    {id: 1, name: 'clean up', status: 'open'},
    {id: 2, name: 'cook', status: 'done'}
  ];
  done(null, {
    statusCode: 200,
    body: JSON.stringify({data: todo_list})
  })
};

module.exports.handler = async (event, context, done) => {
  done(null, {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      message: 'Hello from AWS API'
    })
  })
};

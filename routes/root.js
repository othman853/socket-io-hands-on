module.exports = (request, response) => {
  response.render('index.ejs', {title: 'Yo, this is socket.io hands on'});
};

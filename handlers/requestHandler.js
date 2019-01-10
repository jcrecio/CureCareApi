exports.handleResponse = function(res, responseData) {
    res.statusCode = responseData.responseCode;
    res.send(responseData.content);
  
    responseData.log(responseData.content);
  }
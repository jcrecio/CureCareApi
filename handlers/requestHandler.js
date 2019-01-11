exports.handleResponse = function(res, responseData, logAction) {
    res.statusCode = responseData.responseCode;
    res.send(responseData.content);
  
    logAction(responseData.content);
  }
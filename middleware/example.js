var validator = function(req, res, next) {
    // If the request wasn't a POST request, pass along to the next handler immediately.
    if (req.method !== 'POST') return next();
  
    // Perform your validations.
    Check(req.body, function(err) {
      // Validation failed, or an error occurred during the external request.
      if (err) return res.sendStatus(400);
      // Validation passed.
      return next();
    });
  };
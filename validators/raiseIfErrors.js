exports.raiseValidationErrors = function(validationErrors){
    if (validationErrors.length > 0) {
        return Promise.reject(new Error(validationErrors[0]));
    }

    return Promise.resolve();
}
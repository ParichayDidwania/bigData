class CustomError extends Error {
    constructor({message, code}) {
        super(message);
        this.status_code = code;
    }
}

const ERROR_TYPES = {
    UNAUTHORIZED: {
        code: 401
    },
    NOT_FOUND: {
        message: 'Record not found',
        code: 404
    },
    VALIDATION_FAILUIRE: {
        message: 'Validation failed',
        code: 400
    },
    ALREADY_EXISTS: {
        message: 'Record already exists',
        code: 409
    }
}

module.exports = { CustomError, ERROR_TYPES };

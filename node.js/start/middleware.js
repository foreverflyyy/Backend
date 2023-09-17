import colors from "colors";

export function dateRequest(req, res, next) {
    req.requestTime = Date.now();
    next();
}

export function logger(req, res, next) {
    console.log(colors.bgGreen.black(`Time: ${req.requestTime}`))
    next();
}
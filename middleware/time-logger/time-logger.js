const timeLogger = (req, res, next) => {
    if (!res.locals.beforeStart) {
        res.locals.beforeStart = new Date();
        return next();
    }
    const beforeStart = res.locals.beforeStart;
    const afterFinish = new Date();
    console.log(`Elapsed Time: ${afterFinish - beforeStart} ms`);
};

export default timeLogger;
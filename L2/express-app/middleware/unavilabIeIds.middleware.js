//In express, Una funzione middleware è qualsiasi funzione che ha questa firma:
const unavailableIds = (req, res, next) => {

    if(parseInt(req.params.id) === 2){
        const err = new Error('Id 2 unavailable');
        err.status = 400;
        return next(err);
    }

    next();
}

module.exports = unavailableIds;
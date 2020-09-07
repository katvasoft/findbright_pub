export const commonErrorHandler = (err, req,res,next) => {

    console.error("Exception occurred in some route : ", err.message);
    res.status(err.status || 500).send();

}

export const routeErrorWrapper = fn => (req,res) => {
    fn(req,res).catch((err) => {
        console.error("Exception occurred in some route : ", err);
        res.status(err.status || 500).send();
    })
}
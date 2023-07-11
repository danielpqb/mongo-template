import { db } from "../database/database.js";

async function userAuthorization(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send('Invalid token');
    }

    try {
        const user = await db.collection('users').findOne({ token });
    
        if (!user) {        
            return res.status(401).send('User not found');
        }  
        res.locals.user = user;

    } catch (error) {    
        return res.status(500).send(error);
    }

    next();
}

export { userAuthorization };
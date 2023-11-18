import express from "express";
import {authentication} from "./authentication";
import {users} from "./users";

const router = express.Router();
//export default (): express.Router => router; //default export
export const createRouter = (): express.Router => { //named export
    authentication(router);
    users(router);
    return router;
}
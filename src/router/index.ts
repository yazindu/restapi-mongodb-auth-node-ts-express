import express from "express";
import {authentication} from "./authentication";

const router = express.Router();
//export default (): express.Router => router; //default export
export const createRouter = (): express.Router => { //named export
    authentication(router);
    return router;
}
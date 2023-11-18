import express from "express";
import {register} from "../controllers/authentication";

export const authentication = ((router: express.Router) => {
    router.post('/auth/register', register)
});
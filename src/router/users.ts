import express from "express";
import {getAllUsers} from "../controllers/users";
import {isAuthenticated} from "../middlewares";

export const users = (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
};
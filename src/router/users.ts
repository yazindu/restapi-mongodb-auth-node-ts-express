import express from "express";
import {getAllUsers} from "../controllers/users";

export const users = (router: express.Router) => {
    router.get('/users', getAllUsers);
};
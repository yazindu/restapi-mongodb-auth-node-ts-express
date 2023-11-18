import express from "express";
import {deleteUser, getAllUsers} from "../controllers/users";
import {isAuthenticated, isOwner} from "../middlewares";

export const users = (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
};
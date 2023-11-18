import express from "express";

const router = express.Router();
//export default (): express.Router => router; //default export
export const createRouter = (): express.Router => router; //named export
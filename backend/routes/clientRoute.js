import express from "express";
import * as clientController from "../controllers/clientController.js"
import { Router } from "express";

const router = Router()


router.get("/clients", clientController.getClients)
router.post("/clients", clientController.createClient)
router.patch("/clients/:id", clientController.updateClient)
router.delete("/clients/:id", clientController.deleteClient)
router.get("/clients/search", clientController.searchClients)

export default router
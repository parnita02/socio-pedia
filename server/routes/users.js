import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controller/users.js";
import { verifyToken } from "../middleware/auth.js";
// import { verify } from "jsonwebtoken";

const router = express.Router();

// read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// Update
router.patch("/:id/:friendID", verifyToken, addRemoveFriend);

export default router;

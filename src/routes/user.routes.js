import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  getUserWatchHistory,
  updateAccountDetials,
  updateAvatar,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
); // working

router.route("/login").post(loginUser); // working

// secured routes
router.route("/logout").post(verifyJWT, logoutUser); // working

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword); // working

router.route("/current-user").get(verifyJWT, getCurrentUser); // working

router.route("/channel/:username").get(verifyJWT, getUserChannelProfile); // working

router.route("/watch-history").get(verifyJWT, getUserWatchHistory); // working

router.route("/update-account").patch(verifyJWT, updateAccountDetials); // working

router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateAvatar);

export default router;

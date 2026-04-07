import { useState } from "react";
import { ProfileView } from "../views/ProfileView";
import { toggleProfileController, logoutController } from "../controllers/profileController";

export function Profile({ setUser }: any) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <ProfileView
      openProfile={openProfile}
      toggleProfile={() => toggleProfileController(setOpenProfile)}
      handleLogout={() => logoutController(setUser)}
    />
  );
}
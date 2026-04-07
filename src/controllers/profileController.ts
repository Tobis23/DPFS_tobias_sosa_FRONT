export const toggleProfileController = (
  setOpenProfile: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setOpenProfile((prev) => !prev);
};

export const logoutController = (setUser: any) => {
  setUser([]);
};
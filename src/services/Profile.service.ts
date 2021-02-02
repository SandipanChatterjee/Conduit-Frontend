import axios from "../eaxios";

export const ProfileService = async (profileName: string) => {
  const res = await axios.get(`profiles/${profileName}`);
  return res.data.profile;
};

const getProfile = async () => {
  const response = await fetch("http://127.0.0.1:3000/api/profile");
  const profile = await response.json();
  return profile;
};

const Profile = async () => {
  const profile = await getProfile();
  return <main className="text-green-400">profile layout {profile.name}</main>;
};

export default Profile;

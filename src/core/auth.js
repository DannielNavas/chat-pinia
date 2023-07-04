import useProfileStore from "@/stores/profile.js";

// TODO: llamada a la api de login
const login = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "nerd diana",
      });
    }, 2500);
  });
};

// TODO: llamada al backend para obtener los datos del usuario logueado
export const main = async () => {
  const profileStore = useProfileStore();
  const user = await login();
  console.log(user);
  profileStore.username = user.username;
  profileStore.status = "active";
};

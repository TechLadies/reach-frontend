import history from "./history";

function logout() {
  localStorage.removeItem("token");
  history.push("/login");
}

export default logout;

import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axioutilss.create({
//     baseUrl: "http://localhost:5000/api",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth
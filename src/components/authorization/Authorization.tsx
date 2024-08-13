import { useState } from "react";
import { ModalInput } from "../modal/ModalInput";
import { Modal } from "../modal/Modal";
import { useQuery } from "@tanstack/react-query";

export const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authQuery = useQuery({
    queryKey: ["token"],
    queryFn: () => fetch(
      "http://127.0.0.1:8000/login", 
      {
        method: "POST",
        body: { email: email, password: password },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "no-cors",
        }, 
      }
    ),
    staleTime: Infinity,
    enabled: false
  });

  const btnOnSubmit = (event: Event) => {
    event.preventDefault();
    authQuery.refetch();
  
    if (authQuery.isPending) return console.log("Checking data loading...");
  
    if (authQuery.isError) return console.log("Error: " + authQuery.error.message);
    
    setEmail(""); setPassword("");
    return console.log(authQuery.data);
  };

  return (
    <Modal
      title="Authorisation"
      info="Log in to your account and start using the best notes right now!"
      openModalBtnText="Log in"
      modalBtnText="Done"
      modalBtnOnClick={ (event: Event) => btnOnSubmit(event) }>
      <ModalInput type="email" label="Email" handleChange={ setEmail } />
      <ModalInput type="password" label="Password" handleChange={ setPassword } />
    </Modal>
  );
}
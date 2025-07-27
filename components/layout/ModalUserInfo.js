import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ModalUserinfo({ isUserInfo, handleUserInfo }) {
	const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [address, setAddress] = useState(null)

	useEffect(()=>{
		setEmail(localStorage.getItem("email"))
		setUsername(localStorage.getItem("username"))
        setAddress(localStorage.getItem("address"))
	} , [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            localStorage.clear(); 

            toast.success("Logout Successful. Good Bye!", {
                position: "top-right",
                autoClose: 1000,
                closeOnClick: true,
                onClose: () => {
                    handleUserInfo();
                    window.location.reload();
                }
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className={`modal fade modal-login ${isUserInfo ? "show d-block" : ""}`} tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" onClick={handleUserInfo} aria-label="Close" />
                        <div className="tfre_login-form">
                            <h2>Welcome, {username}</h2>
                            <form className="tfre_login" onSubmit={handleSubmit}>
                                <div className="container">
                                    <div className="form-group">
                                        <label htmlFor="username">Username: {username}</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email: {email}</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Full Address: {address}</label>
                                    </div>
                                </div>   
                                <button type="submit" className="flat-button">Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isUserInfo && <div className="modal-backdrop fade show" onClick={handleUserInfo} />}
        </>
    );
}

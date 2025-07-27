import { useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

export default function ModalForgotPassword({ isForgotPass, handleForgotPass, handleLogin }) {
	const [userLogin, setUserLogin] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/reset-password", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ userLogin }),
			});

			const data = await res.json();

			if (res.ok) {
				Swal.fire({
					icon: "success",
					title: "Permintaan Reset Terkirim",
					text: data.message || "Cek email kamu untuk tautan reset password.",
				});
				handleForgotPass(); // Tutup modal
			} else {
				Swal.fire({
					icon: "error",
					title: "Reset Gagal",
					text: data.error || "Cek kembali email atau username.",
				});
			}
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Terjadi Kesalahan",
				text: "Gagal menghubungi server. Coba beberapa saat lagi.",
			});
		}
	};

	return (
		<>
			<div className={`modal fade modal-login ${isForgotPass ? "show d-block" : ""}`} id="exampleModalToggle3" aria-hidden="true" tabIndex={-1}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<button type="button" className="btn-close" onClick={handleForgotPass} aria-label="Close" />
						<div className="tfre-resset-password container">
							<form onSubmit={handleSubmit}>
								<h4>Forgot your password?</h4>
								<div className="form-group control-username">
									<input
										name="user_login"
										className="form-control control-icon reset_password_user_login"
										placeholder="Enter your username or email"
										value={userLogin}
										onChange={(e) => setUserLogin(e.target.value)}
										required
									/>
									<button type="submit" className="btn flat-button btn-block tfre_forgetpass">
										Get new password
									</button>
								</div>
							</form>
						</div>
						<a
							onClick={() => {
								handleLogin();
								handleForgotPass();
							}}
							data-bs-toggle="modal"
							data-bs-dismiss="modal"
							className="tfre_login_redirect"
						>
							Back to Login
						</a>
					</div>
				</div>
			</div>
			{isForgotPass && <div className={`modal-backdrop fade show`} onClick={handleForgotPass} />}
		</>
	);
}

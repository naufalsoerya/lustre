import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function ModalProduct({ product, onClose }) {
    const [token, setToken] = useState('')
    const [userId, setUserId] = useState('');
    const [productDetail, setProductDetail] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        setUserId(localStorage.getItem("id"))

        const fetchData = async () => {
			try {
				const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/product-detail?parentId=${product.productId}`); 
				const data = await res.json();
				setProductDetail(data); 
			} catch (err) {
				console.error("Failed to fetch products:", err);
			}
		};

		fetchData();
    }, []);

    const handleSubmit = async (e, productId, userId) => {
        e.preventDefault();

        try {
            const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/carts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ productId, userId: parseInt(userId, 10) }),
            });
            const data = await res.json();

            if (res.ok) {
                toast.success(data.message || "Item added to cart!", {
                    position: "top-right",
                    autoClose: 1000,
                    closeOnClick: true,
                });	

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                toast.info(data.message || "Please select size first!", {
                    position: "top-right",
                    autoClose: 1500,
                    closeOnClick: true,
                });	
            }
        } catch (err) {
            console.error(err);
        }
    };

    const showInformation = () => {
        Swal.fire({
            title: "<strong>Have an Account?</strong>",
            icon: "info",
            html: "Please kindly register/login first!",
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: "Okay!",
        });
    };

    const imageUrls = [
        product.urlPhoto,
        product.urlPhoto2,
        product.urlPhoto3,
        product.urlPhoto4,
        product.urlPhoto5,
    ].filter(Boolean);

    return (
        <div 
            className={`modal fade show d-block`} 
            tabIndex={-1} 
            style={{ 
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 1040,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
            }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-3">
                    <button onClick={onClose} className="btn-close align-self-end" />
                    <div className="text-center">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3500 }}
                            pagination={{ clickable: true }}
                            className="product-swiper mb-4"
                        >
                            {imageUrls.map((url, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={`/${url}`}
                                        alt={`Slide ${index + 1}`}
                                        style={{
                                            width: 'auto',
                                            height: '400px',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <p className="mt-3">Materials: {product.materials}</p>
                        <p>
                            {new Intl.NumberFormat('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            }).format(product.price)}
                        </p>
                        <div className="mt-3 flex-wrap">
                            {productDetail.map((item, index) => (
                                <div key={index} className="form-check form-check-inline" style={{ minWidth: "80px" }}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sizeOptions"
                                        id={`size-${index}`}
                                        value={item.productId}
                                        onChange={(e) => setSelectedSize(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor={`size-${index}`}>
                                        {item.size}
                                    </label>
                                </div>
                            ))}
                        </div>

                        { token ? 
                            <>
                                <form onSubmit={(e) => handleSubmit(e, selectedSize, userId)}>
                                    <button type="submit" className='flat-button bg-white text-danger mt-3 w-60'>Add to Cart</button>
                                </form>
                            </> :
                            <>
                                <button onClick={() => showInformation()} className='flat-button bg-white text-danger mt-3 w-60'>Add to Cart</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

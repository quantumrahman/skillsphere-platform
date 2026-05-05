"use client";

import { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

import Link from "next/link";
import FormInput from "@/components/ui/Inputs/FormInput/FormInput.jsx";
import FormButton from "@/components/ui/Buttons/FormButton/FormButton.jsx";
import SocialLogin from "../SocialLogin/SocialLogin";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    const formValidate = () => {
        let errors = {};

        const email = formData.email;
        const password = formData.password;

        const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            errors.email = "Please enter your email.";
        } else if (!emailRegx.test(email)) {
            errors.email = "Please enter a valid email.";
        };

        const passLength = 8;
        if (!password) {
            errors.password = "Please enter your password.";
        } else if (password.length < passLength) {
            errors.password = "Password must be at least 8 characters.";
        };

        return errors;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const validationErrors = formValidate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        };

        console.log(formData);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleFormSubmit}>
                <FormInput type="text" name="email" placeholder="Email address" value={formData?.email} onChange={handleOnChange} error={errors.email}/>
                <FormInput type="password" name="password" placeholder="Password" value={formData?.password} onChange={handleOnChange} error={errors.password}/>
                <FormButton>Login</FormButton>
            </form>
            <div className="w-full my-[24px] lg:my-[30px]">
                <SocialLogin />
            </div>
            <div className="w-full text-center">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-[#E6FFF9] md:text-base lg:text-lg transition-all duration-300 ease-linear">{"Don't have an account?"}</span>
                    <div className="flex items-center justify-center">
                        <Link 
                            href={'/auth/signup'}
                            className="text-sm font-medium text-[#E6FFF9] md:text-base lg:text-lg transition-all duration-300 ease-linear underline"
                        >
                            <span>Sign Up</span>
                        </Link>
                        <RiArrowRightUpLine color="#E6FFF9" className="text-xl md:text-2xl mt-1"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

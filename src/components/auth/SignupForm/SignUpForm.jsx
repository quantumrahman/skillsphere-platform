"use client";

import { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

import Link from "next/link";
import FormButton from "@/components/ui/Buttons/FormButton/FormButton";
import FormInput from "@/components/ui/Inputs/FormInput/FormInput";

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photo: "",
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

        const name = formData.name;
        const email = formData.email;
        const photo = formData.photo;
        const password = formData.password;

        if (!name.trim()) {
            errors.name = "Please enter your name.";
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            errors.email = "Please enter your email.";
        } else if (!emailRegex.test(email)) {
            errors.email = "Please enter a valid email.";
        };

        const photoRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
        if (!photo) {
            errors.photo = "Please enter your photo url.";
        } else if (!photoRegex.test(photo)) {
            errors.photo = "Please enter a valid url.";
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
                <FormInput 
                    type="text" 
                    name="name" 
                    placeholder="Enter your Name" 
                    value={formData.name} 
                    onChange={handleOnChange} 
                    error={errors.name}
                />
                <FormInput 
                    type="text" 
                    name="email" 
                    placeholder="Enter your Email" 
                    value={formData.email} 
                    onChange={handleOnChange} 
                    error={errors.email}
                />
                <FormInput 
                    type="text" 
                    name="photo" 
                    placeholder="Photo URL" 
                    value={formData.photo} 
                    onChange={handleOnChange} 
                    error={errors.photo}
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleOnChange} 
                    error={errors.password}
                />
                <FormButton>Sign Up</FormButton>
            </form>
            <div className="w-full flex justify-center mt-[24px] lg:mt-[30px]">
                <span className="text-sm font-normal text-[#E6FFF9] md:text-base lg:text-lg transition-all duration-300 ease-linear flex items-center justify-center flex-wrap gap-2">
                    {"Don't have an account?"}
                    <div className="flex items-center justify-center">
                        <Link 
                            href={'/auth/login'}
                            className="text-sm font-medium text-[#E6FFF9] md:text-base lg:text-lg transition-all duration-300 ease-linear underline"
                        >
                            <span>Login</span>
                        </Link>
                        <RiArrowRightUpLine 
                            color="#E6FFF9" 
                            className="text-xl md:text-2xl mt-1"
                        />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default SignUpForm;

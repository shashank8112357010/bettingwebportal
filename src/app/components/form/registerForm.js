// RegisterForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CiMobile3 } from 'react-icons/ci';
import { MdOutlineGroupAdd } from "react-icons/md";
import { TfiKey } from 'react-icons/tfi';
import Link from 'next/link';

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            phone: '',
            password: '',
            confirmPassword: '',
            inviteCode: ''
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                .matches(/^\d{10}$/, 'Invalid phone number')
                .required('Phone number is required'),
            password: Yup.string()
                .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
                .matches(/[a-z]/, 'Must contain at least one lowercase letter')
                .matches(/[@$!%*?&#]/, 'Must contain at least one special character')
                .matches(/\d/, 'Must contain at least one number')
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            inviteCode: Yup.string()
        }),
        onSubmit: values => {
            // handle form submission
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full px-8">
            <div className="flex flex-col">
                <label className="text-primaryGray flex gap-1 items-center" htmlFor="phone">
                    <CiMobile3 className='w-5 h-5' /> Phone number
                </label>
                <input
                    id="phone"
                    type="text"
                    {...formik.getFieldProps('phone')}
                    placeholder="Enter Phone number"
                    className={`mt-1 p-2 mb-4 rounded-md bg-[#141414] placeholder:text-primaryGray text-white border ${formik.touched.phone && formik.errors.phone ? formik.errors.phone !== 'Invalid phone number' ? 'border-red-500' : 'border-blue-500' : 'border-[#a4a4a44e]'} focus:outline-none placeholder:text-xs`}
                />
                {formik.touched.phone && formik.errors.phone && formik.errors.phone === 'Invalid phone number' ? (
                    <div className="text-blue-500 text-sm">Phone number must be 10 digits</div>
                ) : null}
                {formik.touched.phone && formik.errors.phone && formik.errors.phone !== 'Invalid phone number' ? (
                    <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                ) : null}
            </div>
            <div className="flex flex-col">
                <label className="text-primaryGray flex gap-1 items-center" htmlFor="password">
                    <TfiKey className='w-5 h-5' /> Password
                </label>
                <input
                    id="password"
                    type="password"
                    {...formik.getFieldProps('password')}
                    placeholder="Enter Password"
                    className={`mt-1 p-2 mb-4 rounded-md bg-[#141414] placeholder:text-primaryGray text-white border ${formik.touched.password && formik.errors.password ? formik.errors.password === 'Password is required' ? 'border-red-500' : 'border-blue-500' : 'border-[#a4a4a44e]'} focus:outline-none placeholder:text-xs`}
                />
                {formik.touched.password && formik.errors.password && formik.errors.password !== 'Password is required' ? (
                    <div className="text-blue-500 text-sm">
                        {formik.errors.password}
                        {/* Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long. */}
                    </div>
                ) : null}
                {formik.touched.password && formik.errors.password && formik.errors.password === 'Password is required' ? (
                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                ) : null}
            </div>
            <div className="flex flex-col">
                <label className="text-primaryGray flex gap-1 items-center" htmlFor="confirmPassword">
                    <TfiKey className='w-5 h-5' /> Confirm Password
                </label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...formik.getFieldProps('confirmPassword')}
                    placeholder="Enter Password"
                    className={`mt-1 p-2 mb-4 rounded-md bg-[#141414] placeholder:text-primaryGray text-white border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword === 'Confirm Password is required' ? 'border-red-500' : 'border-blue-500' : 'border-[#a4a4a44e]'}  focus:outline-none placeholder:text-xs`}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && formik.errors.password !== 'Confirm Password is required' ? (
                    <div className="text-blue-500 text-sm">{formik.errors.confirmPassword}</div>
                ) : null}
                {formik.touched.confirmPassword && formik.errors.confirmPassword && formik.errors.password === 'Confirm Password is required' ? (
                    <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                ) : null}
            </div>
            <div className="flex flex-col">
                <label className="text-primaryGray gap-1 flex items-center" htmlFor="inviteCode">
                    <MdOutlineGroupAdd className='w-5 h-5' /> Invite code
                </label>
                <input
                    id="inviteCode"
                    type="text"
                    {...formik.getFieldProps('inviteCode')}
                    placeholder="Enter Invite code"
                    className="mt-1 p-2 mb-4 rounded-md bg-[#141414] placeholder:text-primaryGray text-white border border-[#a4a4a44e] focus:outline-none placeholder:text-xs"
                />
            </div>
            <p className="text-center text-sm text-white mt-6 mb-12">
                Already a member? <Link href="/auth/login" className="text-yellow-400 hover:underline">Login</Link>
            </p>
            <button
                type="submit"
                className="w-full mb-2 py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-900 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
                Sign Up
            </button>
        </form>
    );
};

export default RegisterForm;

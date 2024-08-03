import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TfiKey } from "react-icons/tfi";
import { CiMobile3 } from "react-icons/ci";
import Link from 'next/link';
import { HomeButton } from '@/app/components/small/button';  // Importing the HomeButton component

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      phone: '',
      password: ''
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required('Phone number is required'),
      password: Yup.string()
        .required('Password is required')
    }),
    onSubmit: values => {
      
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="text-primaryGray flex gap-1 items-center" htmlFor="phone">
          <CiMobile3 className='w-5 h-5' />Phone number
        </label>
        <input
          id="phone"
          type="text"
          {...formik.getFieldProps('phone')}
          placeholder="Enter Phone number"
          className={`mt-1 p-2 mb-2 rounded-md bg-[#141414] placeholder:text-primaryGray placeholder:text-xs text-white border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-[#a4a4a44e]'} focus:outline-none`}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <label className="text-primaryGray flex gap-1 items-center" htmlFor="password">
          <TfiKey className='w-5 h-5' />Password
        </label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
          placeholder="Enter Password"
          className={`mt-1 p-2 mb-2 rounded-md bg-[#141414] placeholder:text-xs placeholder:text-primaryGray text-white border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-[#a4a4a44e]'} focus:outline-none`}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>
      <div className="text-center text-sm text-white mt-10 mb-10">
        Not a member? <Link href="/auth/register" className="text-yellow-400 hover:underline">Create Account</Link>
      </div>
      <HomeButton type="submit">Log In</HomeButton>
    </form>
  );
};

export default LoginForm;

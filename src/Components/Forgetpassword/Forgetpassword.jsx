import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup'

export default function Forgetpassword() {
        
        const [resetpasword, setResetpasword] = useState(null);

      async function getResetPassword(values) {
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, values);
        console.log(data);
        setResetpasword(data.data)
        toast.success("Successfully Sent Code" , { 
          duration: 500,
          
      });
    }


    let validationSchema = Yup.object().shape({
        email: Yup.string().email("email invalid").required('email is required'),
      })
      
    let formik = useFormik({
        initialValues:{
          email:'',
        },
        validationSchema:validationSchema
        ,onSubmit:getResetPassword
        
      })


  return <>
  
    <div className='pt-8 pb-60 w-1/2 mx-auto'>
    <form onSubmit={formik.handleSubmit} className='mx-auto'>
    <h4>Please enter your verification code</h4>
<div className="relative z-0 w-full mb-5 group">
<input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
<label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email:</label>
</div>

{formik.errors.email && formik.touched.email &&<div className="px-4 mb-4 py-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
{formik.errors.email}
</div>}
<button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">verify</button>



</form>
    </div>
  </>
}

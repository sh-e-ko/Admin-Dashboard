import { useFormik } from 'formik';
import * as Yup from 'yup';
import { object } from 'yup'
import React from 'react'
import UsersApi from '../../../Api/UsersApi'
import style from './Form.module.css'
export default function Form({ id, firstName, lastName })
{
    const updateFormik = useFormik({
        validateOnMount: true,

        initialValues: {
            FirstName: firstName,
            LastName: lastName,
            Username: "",
            Age: "",
            Email: "",
            password: "",
            phone: "",
        },

        validationSchema: object({
            FirstName: Yup.string().required("First name is required"),
            LastName: Yup.string().required("Last name is required"),
            Username: Yup.string().required("Username is required"),
            Email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
            phone: Yup.string().matches(/^\d{11}$/, "Phone must be 11 digits").required("Phone is required"),
            Age: Yup.number().required("Age is required"),
        }),

        onSubmit: (values) =>
        {
            UsersApi.put(`/${id}`, values)
                .then((res) =>
                {
                    console.log("users Update", res.data)
                })

                .catch((err) =>
                {
                    console.log("users Update failed", err)
                })


            updateFormik.resetForm();
        }
    })




    return (
        <form>
            <div className={style.container} >

                <div className={style.contant}>
                    <input type="text" placeholder='Enter Your FirstName' {...updateFormik.getFieldProps("FirstName")} />
                    {updateFormik.errors.FirstName && updateFormik.touched.FirstName && <span>{updateFormik.errors.FirstName}</span>}
                </div>

                <div className={style.contant} >
                    <input type="text" placeholder='Enter Your LastName' {...updateFormik.getFieldProps("LastName")} />
                    {updateFormik.errors.LastName && updateFormik.touched.LastName && <span>{updateFormik.errors.LastName}</span>}
                </div>

                <div className={style.contant}>
                    <input type="text" placeholder='Enter Your Username' {...updateFormik.getFieldProps("Username")} />
                    {updateFormik.errors.Username && updateFormik.touched.Username && <span>{updateFormik.errors.Username}</span>}
                </div>

                <div className={style.contant} >
                    <input type="number" placeholder='Enter Your Age'  {...updateFormik.getFieldProps("Age")} />
                    {updateFormik.errors.Age && updateFormik.touched.Age && <span>{updateFormik.errors.Age}</span>}
                </div>

                <div className={style.contant}>
                    <input type="email" placeholder='Enter You Email' {...updateFormik.getFieldProps("Email")} />
                    {updateFormik.errors.Email && updateFormik.touched.Email && <span>{updateFormik.errors.Email}</span>}
                </div>

                <div className={style.contant}>
                    <input type="password" placeholder='Enter You password' {...updateFormik.getFieldProps("password")} />
                    {updateFormik.errors.password && updateFormik.touched.password && <span>{updateFormik.errors.password}</span>}
                </div>

                <div className={style.contant}>
                    <input type="text" placeholder='Enter You phone'  {...updateFormik.getFieldProps("phone")} />
                    {updateFormik.errors.phone && updateFormik.touched.phone && <span>{updateFormik.errors.phone}</span>}
                </div>

                <div>
                    <button
                        onClick={updateFormik.handleSubmit}
                        disabled={!updateFormik.isValid}
                        type="submit">
                        Add
                    </button>

                </div>
            </div>
        </form>
    )
}

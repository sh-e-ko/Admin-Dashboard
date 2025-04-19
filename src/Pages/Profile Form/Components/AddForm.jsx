import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { object } from 'yup'
import UsersApi from '../../../Api/UsersApi';
import style from'./AddForm.module.css'
import { FaHome } from "react-icons/fa";

export default function AddForm()
{

    const addFormik = useFormik({
        validateOnMount: true,

        initialValues: {
            FirstName: "",
            LastName: "",
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
            UsersApi.post("/add", values)
                .then((res) =>
                {
                    console.log("users", res.data)
                })

                .catch((err) =>
                {
                    console.log("users add failed", err)
                })


            addFormik.resetForm();
        }
    })

    return (
        <form>
            <div className={style.container}>
                <div className={style.inputName}>

                    <div className={style.input}>
                    <input type="text" placeholder='Enter Your FirstName' {...addFormik.getFieldProps("FirstName")}  />
                    {addFormik.errors.FirstName && addFormik.touched.FirstName && <span>{addFormik.errors.FirstName}</span>}
                    </div>

                    <div className={style.input}>
                        <input type="text" placeholder='Enter Your LastName' {...addFormik.getFieldProps("LastName")} />
                        {addFormik.errors.LastName && addFormik.touched.LastName && <span>{addFormik.errors.LastName}</span>}
                    </div>

                </div>

                <div className={style.input}>
                    <input type="text" placeholder='Enter Your Username' {...addFormik.getFieldProps("Username")} />
                    {addFormik.errors.Username && addFormik.touched.Username && <span>{addFormik.errors.Username}</span>}
                </div>

                <div className={style.input}>
                    <input type="number" placeholder='Enter Your Age'  {...addFormik.getFieldProps("Age")} />
                    {addFormik.errors.Age && addFormik.touched.Age && <span>{addFormik.errors.Age}</span>}
                </div>

                <div className={style.input}>
                    <input type="email" placeholder='Enter You Email' {...addFormik.getFieldProps("Email")} />
                    {addFormik.errors.Email && addFormik.touched.Email && <span>{addFormik.errors.Email}</span>}
                </div>

                <div className={style.input}>
                    <input type="password" placeholder='Enter You password' {...addFormik.getFieldProps("password")} />
                    {addFormik.errors.password && addFormik.touched.password && <span>{addFormik.errors.password}</span>}
                </div>

                <div className={style.input}>
                    <input type="text" placeholder='Enter You phone'  {...addFormik.getFieldProps("phone")} />
                    {addFormik.errors.phone && addFormik.touched.phone && <span>{addFormik.errors.phone}</span>}
                </div>

                <div>
                    <button
                        onClick={addFormik.handleSubmit}
                        disabled={!addFormik.isValid}
                        type="submit">
                        Add
                    </button>

                </div>
         </div>
        </form>
    )
}

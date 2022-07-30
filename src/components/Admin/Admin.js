import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () =>
{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const value1 = 'Successfully Submitted';
    const onSubmit = data =>
    {
        console.log( data );
        if ( data )
        {
            setTimeout( () =>
            {
                alert( value1 );
            }, 1500 );
        }
    };

    const oldApiKey = "dghdftjreoikldfgjdklgjdksjhjfhd";
    return (
        <div>
            <div className="container m-atuo w-25">
                <form onSubmit={ handleSubmit( onSubmit ) }>
                    <input className='bg-success text-warning rounded border-0 m-1' { ...register( "apiKey", { required: true } ) } />
                    { errors.apiKey && <span className='text-danger'>please Enter Your Valid API Key</span> }

                    <button className='bg-success text-warning rounded border-0' type="submit">Add API Key</button>
                </form>
            </div>
            <div className="container m-atuo w-50">
                <h1 className="text-center mt-5">Discleimer</h1>
            </div>
        </div>
    );
};

export default Admin;
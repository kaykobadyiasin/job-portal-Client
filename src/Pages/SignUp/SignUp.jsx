import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';


const SignUp = () => {

    const { register, reset, handleSubmit } = useForm();
    const { createUser, googleSign } = useContext(AuthContext);

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    };

    const handleGoogle = () => {
        googleSign()
        .then(result => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Google SignIn Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }



    return (
        <div>
            <div className="hero py-10 bg-base-200">
                <div className="hero-content w-full flex-col lg:flex-col">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl font-bold my-5">Sign Up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" required {...register("name")} placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" required {...register("email")} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" required {...register("password")} placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value='Sign Up' className="btn border-2 border-[#60A5FA] hover:border-[#60A5FA] hover:bg-transparent hover:text-[#1F2937] bg-[#60A5FA] font-semibold text-white" />
                                    <p className='my-2 text-center'>Already have account please <Link to='/login' className='text-[#60A5FA]'>Sign In</Link></p>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <div className='cursor-pointer'>
                                        <FcGoogle onClick={handleGoogle} className='border rounded-full p-2 text-5xl'></FcGoogle>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
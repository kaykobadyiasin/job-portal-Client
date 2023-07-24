import React from 'react';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';

const ExperiencedJobPoster = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const expertJob = {
            companyLogo: data.companyLogo,
            companyName: data.companyName,
            positionName: data.positionName,
            jobLocation: data.jobLocation,
        }

        fetch('https://job-portal-server-gamma.vercel.app/experiencedJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(expertJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Experienced Job Added Success',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

        reset();
        console.log(data)

    }

    return (
        <div className="hero-content my-20 flex-col lg:flex-row-reverse text-center  container mx-auto">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h2 className='mx-auto border-b-4 lg:w-full py-3 rounded w-full text-3xl text-center border-[#60A5FA] font-semibold'>Experienced Job</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Logo URL</span>
                        </label>
                        <input type="text" {...register("companyLogo")} placeholder="Company Logo URL" required className="input input-bordered text-black" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" {...register("companyName")} placeholder="Company Name" required className="input input-bordered text-black" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Position Name</span>
                        </label>
                        <input type="text" {...register("positionName")} placeholder="Position Name" required className="input input-bordered text-black" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input type="text" {...register("jobLocation")} placeholder="Location" required className="input input-bordered text-black" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#60A5FA] border-2 border-transparent hover:bg-transparent hover:border-[#60A5FA] hover:text-black">Post Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExperiencedJobPoster;
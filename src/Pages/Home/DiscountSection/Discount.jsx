import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div className=" mt-20 mx-40 carousel h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img className="ms-[500px] mt-[-20px]" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2b2493b-0e6c-4a7a-a12f-f0f568e1ccb5/dbyse4v-e667196e-5bc0-47ad-ba0d-cc0acb9eab7d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyYjI0OTNiLTBlNmMtNGE3YS1hMTJmLWYwZjU2OGUxY2NiNVwvZGJ5c2U0di1lNjY3MTk2ZS01YmMwLTQ3YWQtYmEwZC1jYzBhY2I5ZWFiN2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vDWvOlbupgWtpDRPUSDWkHyPgnltp1tLXjNmlJmEvgc" />
                <div className="absolute  flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-36  '>
                        <div>
                            <img className='ms-[-20px] mt-[-10px]' src="https://www.hostalcasavana.com/images/discount/offer.gif" alt="" />
                        </div>
                        <p className='mb-[-70px]'>Save up to</p>
                        <h4 className=' text-[200px] '> 70%</h4>
                        <div>
                            <Link to='/allToys'><button className="btn btn-outline btn-secondary">Shop now</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Discount;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import  {schoolPride} from '../lib/utils'

import { useStateContext } from '../context/StateContext';

const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

        useEffect(()=> {
            localStorage.clear();
            setCartItems([]);
            setTotalPrice(0);
            setTotalQuantities(0);
            schoolPride();

        },[]);
  
    return (
        <div className='success-wrapper'>
            <div className='success'>

                <p className='icon'>

                    <BsBagCheckFill/>

                </p>
                <h2>Thank you for your Purchase</h2>
                <p className='email-msg'> Check your email inbox for receipt</p>
                <p className='description'>

                        If you have any Questions please email
                    <a className='email' href='mailto:order@example.comm'>order@example.com</a>
                </p>
                <Link href='/'>
                    <button type='button' width = '300px' className='btn'>
                    continue Shopping

                    </button>

                </Link>
            </div>

        </div>
    )
}

export default Success
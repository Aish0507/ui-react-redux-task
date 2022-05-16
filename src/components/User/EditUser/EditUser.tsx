import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './EditUser.scss'

const EditUser = ({ setuserFData }: { setuserFData: any }) => {
    const user: any = useSelector((state: any) => state?.user?.userRowObj)
    const [inputField, setInputField] = useState<any>({
        name: '',
        email: '',
        city: '',
        phone: '',
        website: '',
        cname: '',
    })

    useEffect(() => {
        setInputField({
            name: user?.name,
            email: user?.email,
            city: user?.city,
            phone: user?.phone,
            website: user?.website,
            cname: user?.cname,
            id: user?.id,
        })
    }, [user])

    const inputsHandler = (e: any) => {
        const { name, value } = e.target;
        setInputField((prevState: any) => ({
            ...prevState,
            [name]: value,
        }));
    }

    useEffect(() => {
        setuserFData(inputField)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputField]);

    return (
        <Fragment>
            <label htmlFor="name">
                Name
            </label>
            <input
                id='name'
                type="text"
                name="name"
                onChange={inputsHandler}
                placeholder="Name"
                className='f-control'
                value={inputField?.name || ''} />

            <br />
            <label htmlFor="Email">
                Email
            </label>
            <input
                id='Email'
                type="text"
                name="email"
                onChange={inputsHandler}
                placeholder="Email"
                className='f-control'
                value={inputField?.email || ''} />

            <br />
            <label htmlFor="phone">
                Phone
            </label>
            <input
                id='phone'
                type="text"
                name="phone"
                onChange={inputsHandler}
                placeholder="phone"
                className='f-control'
                value={inputField?.phone || ''} />
            <br />
            <label htmlFor="City">
                City
            </label>
            <input
                id='City'
                type="text"
                name="city"
                onChange={inputsHandler}
                placeholder="city"
                className='f-control'
                value={inputField?.city || ''} />
            <br />
            <label htmlFor="website">
                Website
            </label>
            <input
                type="text"
                name="website"
                onChange={inputsHandler}
                placeholder="website"
                className='f-control'
                value={inputField?.website || ''} />
            <br />
            <label htmlFor="cname">
                Company Name
            </label>
            <input
                id='cname'
                type="text"
                name="cname"
                onChange={inputsHandler}
                placeholder="cname"
                className='f-control'
                value={inputField?.cname || ''} />
            <br />
        </Fragment>
    )
}

export default EditUser
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { UserRootObject } from '../interface/user'
import { fetchUsers } from '../redux'
import EditUser from './EditUser'
import Modal from './Modal'
import Tooltip from './Tooltip'

const setUserRowObj = (user: any) => ({ type: 'SET_USER_OBJ', payload: user })
const mapStateToProps = (state: any) => {
    return {
        userData: state.user,
        userRowObj: state.userRowObj
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        setUserRowObj: (user: UserRootObject) => dispatch(setUserRowObj(user))
    }
}
function Users({ userData, fetchUsers, setUserRowObj, showUserList }: { userData: any, fetchUsers: any, setUserRowObj: any, showUserList: any }) {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    const [userFData, setuserFData] = useState({});
    const userListRef = useRef<any>(null)
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers, showUserList])
    const handleScrollTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        showUserList = false
    }
    const handleClick = (parameter: UserRootObject) => (e: any) => {
        if (e.detail === 2) {
            setModal(!modal)
            const userMap = {
                name: parameter?.name,
                email: parameter?.email,
                city: parameter?.address?.city,
                phone: parameter?.phone,
                website: parameter?.website,
                cname: parameter?.company?.name,
                id: parameter?.id,
            }
            console.log(userMap)
            setUserRowObj(userMap)
        }
    }
    return userData?.loading ? (
        <h2>Loading</h2>
    ) : userData?.error ? (
        <h2>{userData?.error}</h2>
    ) : (
        <Fragment>

            <div className='grid-container'>
                {userData?.users?.map((user: UserRootObject, index: number) =>
                    <div key={index} className="grid-item card" onClick={handleClick(user)}>
                        <Tooltip content={user?.name} direction="top">
                            <div className='title'><h3 className='b-bottom ellipsis'>{user?.name}</h3></div>
                        </Tooltip>
                        <Tooltip content={user?.email} direction="top">
                            <div className='ellipsis'>{user?.email}</div>
                        </Tooltip>
                        <Tooltip content={user?.address?.city} direction="top">
                            <div className='ellipsis'>{user?.address?.city}</div>
                        </Tooltip>
                        <Tooltip content={user?.phone} direction="top">
                            <div className='ellipsis'>{user?.phone}</div>
                        </Tooltip>
                        <Tooltip content={user?.website} direction="top">
                            <div className='ellipsis'>{user?.website}</div>
                        </Tooltip>
                        <Tooltip content={user?.company?.name} direction="top">
                            <div className='ellipsis'>{user?.company?.name}</div>
                        </Tooltip>
                    </div>)}
                {userListRef?.current?.scrollIntoView({ behavior: 'smooth' })}
                <div ref={userListRef} style={{ textAlign: 'end' }} className="contact-btn"
                    onClick={handleScrollTopClick}>
                    Scroll Top (↑)
                </div>
                <Modal show={modal} close={Toggle} title="Edit User" userFData={userFData} >
                    <EditUser setuserFData={setuserFData} />
                </Modal>
            </div>
        </Fragment>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

import React, { Fragment, useEffect, useState } from 'react'
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
function Users({ userData, fetchUsers, setUserRowObj }: { userData: any, fetchUsers: any, setUserRowObj: any }) {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
    const handleClick = (parameter: UserRootObject) => (e: any) => {
        if (e.detail === 2) {
            setModal(!modal)
            setUserRowObj(parameter)
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
                            <div className='ellipsis'>{user?.name}</div>
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
                <Modal show={modal} close={Toggle} title="Edit User">
                    <EditUser />
                </Modal>
            </div>
        </Fragment>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

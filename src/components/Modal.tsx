import { Fragment } from "react";
import ReactDom from "react-dom";
import { connect } from 'react-redux'
import { UserRootObject } from "../interface/user";
import "./Modal.scss";

const updateUserRow = (user: any) => ({ type: 'UPDATE_USER_OBJ', payload: user })
const mapStateToProps = (state: any) => {
    return {
        userRowObj: state.userRowObj
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateUserRowObj: (user: UserRootObject) => dispatch(updateUserRow(user))
    }
}
const Modal = ({ show, close, title, children, userFData, updateUserRowObj }: { show: any, close: any, title: any, children: any, userFData: any, updateUserRowObj: any }) => {
    const submitButton = () => {
        updateUserRowObj(userFData)
        close()
    }
    return ReactDom.createPortal(
        <Fragment>
            <div
                className={`modalContainer ${show ? "show" : ""} `}
                onClick={() => close()}
            >
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <header className="modal_header">
                        <h2 className="modal_header-title">{title}</h2>
                    </header>
                    <main className="modal_content">{children}</main>
                    <footer className="modal_footer">
                        <button className="modal-close" onClick={() => close()}>
                            Cacel
                        </button>
                        <button className="submit" onClick={() => submitButton()}>Submit</button>
                    </footer>
                </div>
            </div>

        </Fragment>,
        document.getElementById("modal") as HTMLElement
    );
};

//export default Modal;
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
import ReactDom from "react-dom";
import "./Modal.scss";

const Modal = ({ show, close, title, children }: { show: any, close: any, title: any, children: any }) => {
    const submitButton = () => {
        console.log('call')
    }
    return ReactDom.createPortal(
        <>
            <div
                className={`modalContainer ${show ? "show" : ""} `}
                onClick={() => close()}
            >
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <header className="modal_header">
                        <h2 className="modal_header-title">{title}</h2>
                        {/* <button className="close" onClick={() => close()}>

                            X
                        </button> */}
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

        </>,
        document.getElementById("modal") as HTMLElement
    );
};

export default Modal;
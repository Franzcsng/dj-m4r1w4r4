import "../../css/components-style/header/sider-bar.scss";


function SideBar({isOpen}){
    return (
        <>
            <div className={`side-bar ${isOpen ? 'open' : ''}`}>

            </div>
        </>
    )
};

export default SideBar;
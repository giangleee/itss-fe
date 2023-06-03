import './style.scss';
import SelectLanguage from './SelectLanguage';
import UserInfo from './UserInfo';

const Header = () => {
    return (
        <div className="container-fluid header-container">
            <div className="header-layout">
                <div className="header-layout__content">
                    <div className="header-layout__left-content">Babyshark</div>
                    <div className="header-layout__right-content">
                        <div className="header-layout__user-info">
                            <UserInfo />
                        </div>

                        <div className="header-layout__select-language">
                            <SelectLanguage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

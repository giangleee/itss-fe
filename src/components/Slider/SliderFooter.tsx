import { IconHome2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

const SliderFooter = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('logout')
    }

    return (
        <div className="footer-content" onClick={() => handleLogout()}>
            <div className="footer-content__icon">
                <IconHome2 width="40" height="40" />
            </div>
            <div className="footer-content__text">Logout</div>
        </div>
    )
}

export default SliderFooter

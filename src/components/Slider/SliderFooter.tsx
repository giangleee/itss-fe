import { IconLogout2 } from '@tabler/icons-react';

const SliderFooter = () => {

    const handleLogout = () => {
        console.log('logout')
    }

    return (
        <div className="footer-content" onClick={() => handleLogout()}>
            <div className="footer-content__icon">
                <IconLogout2 width="40" height="40" />
            </div>
            <div className="footer-content__text">ログアウト</div>
        </div>
    )
}

export default SliderFooter

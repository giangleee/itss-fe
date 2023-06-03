import JapanIcon from '../../assets/japan.png';

const SelectLanguage = () => {
    return (
        <>
            <div className="image__container">
                <img
                    src={JapanIcon}
                    alt="language icon"
                />
            </div>
            <div className="dropdown">
                <button
                    className="dropdown-toggle btn btn-secondary"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"></button>

                <ul className="dropdown-menu">
                    <li>
                        <a
                            className="dropdown-item"
                            href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SelectLanguage;

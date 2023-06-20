import './style.scss'
import { FC } from "react";
import RequestDetailComponent from '../../components/Request/DetailComponent';
import SelectTimeComponent from '../../components/Request/SelectTimeComponent';
import SalaryDetailComponent from '../../components/Request/SalaryDetailComponent';
import AnotherConditionComponent from '../../components/Request/AnotherConditionComponent';
import { Button } from '@mui/material';

const NewRequestView : FC = () => {
    console.log('NewRequestView');
    
    return (
        <div className="new-request__container">
            <h4>新しいリクエスト</h4>
            <RequestDetailComponent />
            <SelectTimeComponent />
            <SalaryDetailComponent />
            <AnotherConditionComponent />
                <div className='row button__container'>
                <Button variant="contained" className='button'>新しく作る</Button>

                </div>
        </div>
    )
}

export default NewRequestView;

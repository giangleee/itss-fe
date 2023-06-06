import './style.scss';
import { ReactNode } from 'react';
import { IconCirclePlus, IconDashboard, IconHome2, IconNotes, IconUserEdit } from '@tabler/icons-react';

interface SliderMenuItemInterface {
    text: string;
    sliderIcon: ReactNode;
    router: string;
}

const SliderMenuItemData: SliderMenuItemInterface[] = [
    {
        text: 'Housekeeper list',
        sliderIcon: (
            <IconHome2
                width="40"
                height="40"
            />
        ),
        router: '/',
    },
    {
        text: 'Housekeeper demand',
        sliderIcon: (
            <IconDashboard
                width="40"
                height="40"
            />
        ),
        router: '/',
    },
    {
        text: 'Request History',
        sliderIcon: (
            <IconNotes
                width="40"
                height="40"
            />
        ),
        router: '/',
    },
    {
        text: 'Create new request',
        sliderIcon: (
            <IconCirclePlus
                width="40"
                height="40"
            />
        ),
        router: '/',
    },
    {
        text: 'Update Profile',
        sliderIcon: (
            <IconUserEdit
                width="40"
                height="40"
            />
        ),
        router: '/',
    },
];

export default SliderMenuItemData;

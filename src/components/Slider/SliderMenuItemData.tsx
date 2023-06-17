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
        text: 'スタッフ情報',
        sliderIcon: (
            <IconHome2
                width="40"
                height="40"
            />
        ),
        router: '/staffs',
    },
    {
        text: '個人情報',
        sliderIcon: (
            <IconUserEdit
                width="40"
                height="40"
            />
        ),
        router: '/profile',
    },
    {
        text: 'リクエスト作成',
        sliderIcon: (
            <IconCirclePlus
                width="40"
                height="40"
            />
        ),
        router: '/request/new',
    },
    {
        text: 'リクエスト歴史',
        sliderIcon: (
            <IconNotes
                width="40"
                height="40"
            />
        ),
        router: '/request/history',
    },
    {
        text: 'スタッフからのリクエスト',
        sliderIcon: (
            <IconDashboard
                width="40"
                height="40"
            />
        ),
        router: '/request-list-staff',
    },
];

export default SliderMenuItemData;

import { ButtonBase } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import Notice from './Notice';
import { TimeFormat } from './TimeFormat';
import './SCSS/NoticeList.scss';

const App = () => {
    const [noticeList, setNoticeList] = useState([
        {
            id: 1,
            text: '결제하신 음식 배송이 완료되었습니다.',
            time: 1599988565147,
            isConfirm: false,
        },
        {
            id: 2,
            text: '결제완료 되었습니다.',
            time: 1599944892312,
            isConfirm: false,
        },
        {
            id: 3,
            text: '배송 요청(도착 예정시간 : 12-13시 사이)',
            time: 1599898092312,
            isConfirm: false,
        },
        {
            id: 4,
            text: '결제하신 음식 배송이 완료되었습니다.',
            time: 1599811692312,
            isConfirm: true,
        },
        {
            id: 5,
            text: '결제완료 되었습니다.',
            time: 1599527292312,
            isConfirm: true,
        },
        {
            id: 6,
            text: '배송 요청(도착 예정시간 : 12-13시 사이)',
            time: 1593292092312,
            isConfirm: true,
        },
    ]);
    const onAllConfirm = useCallback(() => {
        setNoticeList(
            noticeList.map((notice) => ({ ...notice, isConfirm: true })),
        );
    }, [noticeList]);
    const onConfirm = useCallback(
        (id) => {
            setNoticeList(
                noticeList.map((notice) =>
                    notice.id === id ? { ...notice, isConfirm: true } : notice,
                ),
            );
        },
        [noticeList],
    );
    return (
        <div className="NoticePage">
            <div className="NoticeTitle">
                <div className="Title">알림</div>
                <ButtonBase className="AllConfirm" onClick={onAllConfirm}>
                    전체읽기
                </ButtonBase>
            </div>
            <div className="NoticeList">
                {noticeList.map(({ id, text, time, isConfirm }) => (
                    <Notice
                        key={id}
                        text={text}
                        time={TimeFormat(time)}
                        isConfirm={isConfirm}
                        onConfirm={() => onConfirm(id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;

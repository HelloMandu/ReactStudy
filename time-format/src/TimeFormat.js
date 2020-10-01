export const TimeFormat = (prensent) => {
    /*초, 분, 시 하루전 부터는 날짜*/
    const today = new Date();
    const last = new Date(prensent);
    const diff = today.getTime() - last.getTime();

    if (diff >= 1000 * 60 * 60 * 24) {
        let year = last.getFullYear();
        let month = last.getMonth() + 1;
        let date = last.getDate();
        return `${year}/${month}/${date}`;
    } else if (diff >= 1000 * 60 * 60) {
        return `${Math.floor(diff / (1000 * 60 * 60))}시간전`;
    } else if (diff >= 1000 * 60) {
        return `${Math.floor(diff / (1000 * 60))}분전`;
    } else {
        return `${Math.floor(diff / 1000)}초전`;
    }
};

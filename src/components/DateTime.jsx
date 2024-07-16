const date = new Date();
const DateTime = {
    date: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay(),
    },
    time: {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    },
};

export const extractDate = (items) => {
    let extractedDate = items.split('-');
    return extractedDate.map((item) => Number(item));
};

export const extractTime = (items) => {
    let extractedTime = items.split(':');
    return extractedTime.map((item) => Number(item));
};

export const checkDateAndTime = ({
    year,
    newYear,
    month,
    newMonth,
    day,
    newDay,
    hour,
    newHour,
    minute,
    newMinute,
}) => {
    if (newYear <= year) {
        if (newMonth <= month) {
            if (newDay <= day) {
                if (newHour <= hour) {
                    if (newMinute <= minute) {
                        return true;
                    }
                } else return false;
            } else return false;
        } else return false;
    } else return false;
};

export default DateTime;

useLayoutEffect(() => {
    if (data.date && data.time) {
        const [year, month, day] = extractDate(data.date);
        const [hour, minute] = extractTime(data.time);

        const {
            year: newYear,
            month: newMonth,
            day: newDay,
        } = newDateTime.date;

        const { hour: newHour, minute: newMinute } = newDateTime.time;
        const alive = checkDateAndTime({
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
        });

        console.log(alive);

        console.log(data.date, newDateTime);
        console.log(new Date().getUTCMonth());
    } else if (data.date) {
    } else if (data.time) {
    } else {
    }
}, []);

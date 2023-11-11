const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

const parseDate = (isoDateArr) => {
    return isoDateArr.map(isoDate => {
        const date = new Date(isoDate);
    
        return { 
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            date: `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`,
            weekday: weekdays[date.getDay()] 
        }
    })
};

export default parseDate;
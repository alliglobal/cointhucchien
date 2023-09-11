

export function UnixTimeConvert(code){
    const milliseconds = code * 1000;

    const date = new Date(milliseconds);

    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return formattedDate
}
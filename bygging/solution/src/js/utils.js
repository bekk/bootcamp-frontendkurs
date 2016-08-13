import moment from 'moment';


export function formatTime(time) {
    //return time;
    return moment(time).fromNow();
}
import moment from 'moment';

const filters = {
    text: '',
    soryBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altfilters = {
    text: 'bills',
    soryBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters , altfilters };
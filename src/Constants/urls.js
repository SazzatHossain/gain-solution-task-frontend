let HOST = 'http://127.0.0.1:3001/api/v1';

if(process.env.NODE_ENV === 'development') {
  HOST = 'http://127.0.0.1:3001/api/v1';
}


export const urls = {
  homePageUrl: `${HOST}`,
  loginUrl: `${HOST}/sign-in`,
  registrationUrl: `${HOST}/users`,
  events: `${HOST}/events`,
  userDetail: `${HOST}/user-data`,
  userDetailUpdate: `${HOST}/user-data-update`,
  rsvp: (event_id) => `${HOST}/events/${event_id}/rsvps`,
  rsvpResponse: (event_id) => `${HOST}/events/${event_id}/show-rsvp`,
  eventsList: (page = 1, per_page = 6, search = '',from_date, to_date,) => `${HOST}/events?page=${page}&per_page=${per_page}&search=${search}`,
  myEventsList: (page = 1, per_page = 6, search = '') => `${HOST}/my-events-list?page=${page}&per_page=${per_page}&search=${search}`,
  myEventsDetail: (id) => `${HOST}/events/${id}`,
};

let HOST = 'http://192.168.16.104:3001/api/v1';

if(process.env.NODE_ENV === 'development') {
  HOST = 'http://192.168.16.104:3001/api/v1';
}

if(process.env.NODE_ENV === 'production') {
  HOST = 'https://bookflix.com.bd/api/v1';
}

export const urls = {
  homePageUrl: `${HOST}`,
  registrationUrl: `${HOST}/users`,

};

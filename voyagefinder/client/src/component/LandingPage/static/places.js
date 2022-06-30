const places = [
  {
    title: 'flight',
    description:
    'Find the best plane tickets available for your destination from your point of departure. separate into four categories which are the fastest, the cheapest,...',
    imageUrl: process.env.PUBLIC_URL + '/assets/avion.jpg',
    time: 1500,
    to: '/flight'
  },
  {
    title: 'hobby',
    description:
    'here you can see the list of hotel, restaurant, attraction, which are available in the city you want to visit',
    imageUrl: process.env.PUBLIC_URL + '/assets/hobby.jpg',
    time: 1500,
    to: '/setplaning'
  },
  {
    title: 'planing',
    description:
      'Plan your vacation to be able to make the most of your stay and also to not miss any event or place.',
    imageUrl: process.env.PUBLIC_URL + '/assets/calendar.jpg',
    time: 1500,
    to: '/myplaning'
  },
];

export default places;

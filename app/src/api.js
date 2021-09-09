// const sleep = (delay) => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve()
//   }, delay)
// })

const sleep = (delay) =>
  new Promise((resolve) => setTimeout(() => resolve(), delay));

export const getWeather = () =>
  sleep(5000).then(() => {
    if (Math.random() < 0.1) {
      throw new Error("API Error");
    }

    return {
      temperature: 24,
      sunny: false,
      cloudy: true,
    };
  });

// getWeather()
//   .then(data => { ... })
//   .catch(err => { ... })

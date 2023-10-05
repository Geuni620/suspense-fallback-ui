import axios from 'axios';

const wait = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const fetchPostEffect = async () => {
  await wait(3000);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  console.log('effect 서버가 동작했다~!');
  const data = await response.json();
  return data;
};

export const fetchPostQuery = async () => {
  await wait(3000);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 0 },
  });

  console.log('query 서버가 동작했다~!');
  const data = await response.json();
  return data;
};

export const axiosPostQuery = async () => {
  await wait(3000);

  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response.data;
};

export const serverPostQuery = async () => {
  await wait(3000);

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

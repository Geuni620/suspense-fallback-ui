import { useQuery } from '@tanstack/react-query';
import { recordManagerKeys } from 'lib/query/queryFactory';

class FetchError extends Error {
  constructor(public message: string, public status: number) {
    super(message);
  }
}

interface Image {
  id: string;
  url: string;
}

export interface Message {
  id: string;
  text: string;
  createdAt: string;
  title: string;
  image: Image[];
}

const getMessage = async () => {
  const encodedEmail = encodeURIComponent('dlrmsgnl0823@gmail.com');
  const res = await fetch(`http://localhost:8000/api/record/${encodedEmail}`, {
    method: 'GET',
  });

  if (!res.ok) {
    const { message, status } = await res.json();
    throw new FetchError(message, status);
  }

  const data = await res.json();
  console.log('data', data);

  return data;
};

export const useRecordGetQuery = () => {
  const messages = useQuery({
    queryKey: [...recordManagerKeys.record],
    queryFn: () => getMessage(),
  });

  return { messages };
};

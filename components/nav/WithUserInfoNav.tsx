import { useRecordGetQuery } from 'components/nav/useRecordGetQuery';

const UserInfoNav: React.FC = async () => {
  const { messages } = useRecordGetQuery();

  return (
    <div className="text-base font-medium leading-6 tracking-tighter">
      <p>{JSON.stringify(messages.data)}</p>
    </div>
  );
};

export default UserInfoNav;

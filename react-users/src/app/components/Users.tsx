import User from './User';

type UserProps = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

type UsersProps = {
  users: UserProps[];
};

export default function Users({ users }: UsersProps) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

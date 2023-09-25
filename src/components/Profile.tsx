interface Props {
  name: string;
  age: number;
}

const Profile = ({ name, age }: Props) => {
  return (
    <div>
      <p>
        Profile<br />
        이름: {name}<br />
        나이: {age}<br />
      </p>
    </div>
  );
};

export default Profile;;;;
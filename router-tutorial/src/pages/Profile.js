import { useParams } from 'react-router-dom';

const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
  sunguk: {
    name: '강성욱',
    description: '리액트를 좋아하는 아이',
  },
};

const Profile = () => {
  // URL 파라미터는 useParams 라는 훅을 이용하여 객체 형태로
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
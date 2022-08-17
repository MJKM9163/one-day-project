import { KAKAO_AUTH_URL } from "../keys";

const Home = () => {
  return (
    <div className="App">
      <a href={KAKAO_AUTH_URL}>
        <img src="/images/kakao_login.png" alt="로그인 버튼"></img>
      </a>
    </div>
  );
};
// /images/resources/images/potato.png
export default Home;

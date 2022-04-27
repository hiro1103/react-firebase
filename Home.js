import { auth } from "../firebase";
import { useHistory, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import bgImage1 from "../../src/01.jpg";
import bgImage2 from "../../src/02.jpg";
import bgImage3 from "../../src/03.jpg";

const Home = () => {
    const history = useHistory();
    const { user } = useAuthContext();
    const handleLogout = () => {
        auth.signOut();
        history.push('/login');
    };

    if (!user) {
        return <Redirect to="/login" />;
    } else {
        return (
            <div>
                


Web上にあなた専用の日記ページを保存できるサービス | Private Diary

<header class="masthead text-center text-white">
  <div class="masthead-content">
    <div class="container">
      <h1 class="masthead-heading mb-0">Private Diary</h1>
      <h2 class="masthead-subheading mb-0">あなた専用の日記保存サービス</h2>
    </div>
  </div>
  <div class="bg-circle-1 bg-circle"></div>
  <div class="bg-circle-2 bg-circle"></div>
  <div class="bg-circle-3 bg-circle"></div>
  <div class="bg-circle-4 bg-circle"></div>
</header>
<section>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 order-lg-2">
        <div class="p-5">
        <img src={bgImage1} alt=""/>
        </div>
      </div>
      <div class="col-lg-6 order-lg-1">
        <div class="p-5">
          <h2 class="display-4">Web Diary</h2>
          <p>Web上で作成/編集/削除ができる日記</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="p-5">
          <img src={bgImage2} alt=""/>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="p-5">
          <h2 class="display-4">Save Your Diary</h2>
          <p>あなたの日記をWebに保存</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 order-lg-2">
        <div class="p-5">
        <img src={ bgImage3} alt=""/>
        </div>
      </div>
      <div class="col-lg-6 order-lg-1">
        <div class="p-5">
          <h2 class="display-4">Membership System</h2>
          <p>会員制のWeb日記サービス</p>
        </div>
      </div>
    </div>
  </div>
</section>

                <button onClick={handleLogout}>ログアウト</button>
            </div>
        );
    }
};
export default Home;
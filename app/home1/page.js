import "./home.css";
import Link from "next/link";
import Password from "./password/password";
export default function Home1() {
  return (
    <div className="container1">
      <div className="nav">
        <div className="tab">个人文章</div>

        <div className="tab">密码管理</div>

        {/* <div></div> */}
      </div>
      <div className="main-container">
        <Password/>
      </div>
    </div>
  );
}

import { ChildrenProps } from "@/typing/interfaces";
import WallPaper from "@/components/WallPaper/WallPaper";
import "./LoginPage.scss";

const LoginPage = ({ children }: ChildrenProps) => {
  return (
    <div className="loginPage">
      <div className="loginPage__inner">
        { children }
        <div className="loginPage__content">
          {/* <LoginForm /> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Login Page</h1>
        </div>

      </div>        
      <WallPaper variant="login"/>
    </div>
  );
};

export default LoginPage;
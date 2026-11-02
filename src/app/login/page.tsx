import LoginForm from "@/components/LoginForm/LoginForm";
import WallPaper from "@/components/WallPaper/WallPaper";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__inner">
        <div className="loginPage__content">
          <LoginForm />
        </div>
      </div>        
      <WallPaper variant="login"/>
    </div>
  );
};

export default LoginPage;
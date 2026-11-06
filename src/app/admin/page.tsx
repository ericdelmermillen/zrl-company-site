import WallPaper from "@/components/WallPaper/WallPaper";
import "./AdminPage.scss";

const AdminPage = () => {
  return (
    <div className='adminPage'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="adminPage__heading">
        Admin Page
      </h1>
      <WallPaper variant="admin"/>
    </div>
  );
};

export default AdminPage;
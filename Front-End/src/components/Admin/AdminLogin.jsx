import { useDispatch, useSelector } from "react-redux";
import { validate } from "../../httpServices/admin";
import { AdminActions } from "../../store/Admin";
import Input from "../UIs/Input/Input";
import "./AdminLogin.css";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.Admin);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Working on it now!");
    };
    const handleChange = (e) => {
      const result = validate(admin);
      if (result.message) dispatch(AdminActions.onLoginError(result.message));
      else dispatch(AdminActions.onLoginError(""));
      dispatch(
        AdminActions.onHandleChange({
          element: e.target.name,
          value: e.target.value,
        })
      );
    };
  
  const inputs = [
    {
      label: { for: "email", icon: "fas fa-at" },
      input: {
        type: "email",
        id: "email",
        name: "email",
        value: admin.email,
        handleChange: handleChange,
      },
    },  
    {
      label: { for: "password", icon: "fas fa-lock" },
      input: {
        type: "password",
        id: "password",
        name: "password",
        value: admin.password,
        handleChange: handleChange,
      },  
    },  
  ];

  return (
      <div className="Page" name='page'>
        <div className="row m-4">
          <div className="col-sm-4"></div>
          <div className="Form col-md-4 Shadow-1">
            <i className="fas fa-user-tie w pv-2"></i>
            <form
              onSubmit={handleSubmit}
              className="row pt-5"
              name="adminloginform"
            >
              <Input {...inputs[0]} />
              <Input {...inputs[1]} />
              <button type="submit" className="btn Form-Submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default AdminLogin;
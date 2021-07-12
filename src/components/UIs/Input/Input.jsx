const Input = (props) => {
    return (
        <div className="col-12 row pv-2 text-left">
                  <label htmlFor={props.label.for} className="form-label col-2 pt-2">
                  <i className={props.label.icon}></i>
                  </label>
                  <input
                    type={props.input.type}
                    className="form-control col-10"
                    id={props.input.id}
                    name={props.input.name}
                    onChange={(e)=>props.input.handleChange(e)}
                    value={props.input.value}
                  />
                </div>
     );
}
export default Input;
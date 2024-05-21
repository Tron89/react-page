import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import CheckBox from './CheckBox'

function MovieForm() {
  const { setScript } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setScript();
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center flex-wrap" >
      <input type="text" className="rounded-md min-w-64 h-10 border focus:border-slate-600"/>
      <div className="grid grid-cols-3 w-full ">
        <CheckBox text="Enter betwem lines"></CheckBox>
        <CheckBox text="All lowercase"></CheckBox>
        <CheckBox text="All uppercase"></CheckBox>
        <CheckBox text="Space betwem paragraphs"></CheckBox>
        <CheckBox text="Some crazy idea here"></CheckBox>
        <CheckBox text="A END at the end?"></CheckBox>
      </div>
      <input type="submit" />
    </form>
  );
}

export default MovieForm;

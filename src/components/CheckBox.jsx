function CheckBox({text}) {
  return (
    <div className="m-3 min-w-40">
        <input type="checkbox" className="mr-2"/>
        <label for="checkbox">{text}</label>
    </div>
  )
}

export default CheckBox
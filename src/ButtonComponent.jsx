const ButtonComponent = function (propsObj) {
  console.log("il valore è ", propsObj);
  return (
    <>
      <div>
        <button className={propsObj.textColor}>{propsObj.textToShow}</button>
        <hr />
      </div>
    </>
  );
};
export default ButtonComponent;

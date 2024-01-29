const ButtonComponent = function (propsObj) {
  console.log("il valore è ", propsObj);
  return (
    <>
      <div>
        <button className={propsObj.textColor}>{propsObj.textToShow}</button>
      </div>
    </>
  );
};
export default ButtonComponent;

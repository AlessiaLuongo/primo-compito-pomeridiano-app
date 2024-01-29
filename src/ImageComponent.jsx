const ImageComponent = function (propsObj) {
  return (
    <div className="App-logo">
      <img src={propsObj.imageToShow} alt={propsObj.alt} />;
    </div>
  );
};

export default ImageComponent;

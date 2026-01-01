//Tabs Wrapper
function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //setting default value
  return (
    <>
      {/* <menu>{buttons}</menu> */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;

import {
	HeadPopExit,
	PopExitContainer,
	PopExitBlock,
	PopExitTtl,
	PopExitGroup,
	PopExitYes,
	PopExitYesA,
	PopExitNo,
	PopExitNoA,
  } from "./PopExit.styled";
  
  function PopExit() {
	return (
	  <HeadPopExit id="popExit">
		<PopExitContainer>
		  <PopExitBlock>
			<PopExitTtl>
			  <h2>Выйти из аккаунта?</h2>
			</PopExitTtl>
			<form className="pop-exit__form" id="formExit" action="#"> 
			  <PopExitGroup>
				<PopExitYes id="exitYes">
				  <PopExitYesA href="modal/signin.html">Да, выйти</PopExitYesA>{" "}
				</PopExitYes>
				<PopExitNo id="exitNo">
				  <PopExitNoA href="main.html">Нет, остаться</PopExitNoA>{" "}
				</PopExitNo>
			  </PopExitGroup>
			</form>
		  </PopExitBlock>
		</PopExitContainer>
	  </HeadPopExit>
	);
  }
  
  export default PopExit;
import { useState } from "react";
import { Container } from "../Common/Common.styled";
import {
  HeadHeader,
  HeaderBlock,
  HeaderNav,
  HeaderLogoLight,
  HeaderLogoDark,
  HeaderLogoImg,
  HeaderBtnMainNew,
  HeaderUser,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserThemeText,
  PopUserThemeInput,
  PopUserButton,
  HeaderPopUser,
} from "./Header.styled";

function Header({ addCard }) {
	const [isOpen, setIsOpen] = useState(true);

  return (
    <HeadHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogoLight>
            <a href="" target="_self">
              <HeaderLogoImg src="../public/logo.png" alt="logo" />
            </a>
          </HeaderLogoLight>
          <HeaderLogoDark>
            <a href="" target="_self">
              <HeaderLogoImg src="../public/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogoDark>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew" onClick={addCard}>
				      <a href="#popNewCard">
                Создать новую задачу
				      </a>
            </HeaderBtnMainNew>

            <HeaderUser onClick={() => setIsOpen(!isOpen)} href={!isOpen ? "#" : "#user-set-target"}>
              Ivan Ivanov
            </HeaderUser>
              <HeaderPopUser id="user-set-target">
                {/* <a href="">x</a> */}
                <PopUserName>Ivan Ivanov</PopUserName>
                <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
                <PopUserTheme>
                  <PopUserThemeText>Темная тема</PopUserThemeText>
                  <PopUserThemeInput type="checkbox" name="checkbox" />
                </PopUserTheme>
                <PopUserButton type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </PopUserButton>
              </HeaderPopUser>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeadHeader>
  );
}

export default Header
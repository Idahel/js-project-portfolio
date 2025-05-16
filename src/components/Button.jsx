import styled from "styled-components"

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.primaryBtn ? "black" : "white")};
  color: ${props => (props.primaryBtn ? "white" : "black")};
  font-size: 18px;
  width: 303px;
  height: 48px;
  padding: 0 16px;
  border-radius: 12px;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.secondary};

  img{
  height: 31px;
  width: 31px;
  filter: ${props => (props.primaryBtn ? "invert(0%)" : "invert(100%)")};
  }

  &:hover{
  background-color: ${props => (props.primaryBtn ? "white" : "black")}; 
  color: ${props => (props.primaryBtn ? "black" : "white")};

  img {
  filter: ${props => (props.primaryBtn ? "invert(100%)" : "invert(0%)")}
  }
}
`

export const Button = ({ 
  primaryBtn, 
  iconSrc, 
  altText, 
  buttonText,
  link }) => {
  return (
    <ButtonWrapper 
    primaryBtn={primaryBtn} 
    onClick={() => window.open(link, "_blank")}>
      {iconSrc && 
      <img 
      primaryBtn={primaryBtn} 
      src={iconSrc} 
      alt={altText} 
      />}
      <p>{buttonText}</p>
    </ButtonWrapper>
  )
}


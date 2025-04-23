import styled from "styled-components"

const ButtonWrapper = styled.button`
  display: flex;
  background-color: ${props => (props.primaryBtn ? "black" : "white")};
  color: ${props => (props.primaryBtn ? "white" : "black")};
  font-size: 18px;
  width: 303px;
  height: 48px;
  padding: 0 16px;
  border-radius: 12px;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

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

export const Button = ({ primaryBtn }) => {
  return (
    <ButtonWrapper primaryBtn={primaryBtn}>
      <img primaryBtn={primaryBtn} src="/icons/Ic-Web.svg" alt="" />
      Live demo
    </ButtonWrapper>
  )
}


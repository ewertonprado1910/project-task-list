import styled from "styled-components";
import { FcFullTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
/*background: linear-gradient(90deg, #383838 0%, #000000 81.25%);*/
background-image: url("https://picsum.photos/1920/1080?grayscale");
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0;
`
export const ContainerList = styled.div`
background: rgba(237, 242, 199, 0.7);
height: auto;
border-radius: 5px;
padding: 30px 20px;

ul {
  padding: 0;
  margin-top: 30px;
}
`
export const Input = styled.input`
font-size: 15px;
font-weight: 400;
line-height: 17px;
background: #FFFFFF;
color: #000000;
width: 342px;
height: 40px;
border: 1px solid;
border-radius: 5px;
margin-right: 35px;
padding: 0 5px;
`
export const Button = styled.button`
background: #8052EC;
width: 130px;
height: 40px;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;
align-items: center;
color: #FFFFFF;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}
&:active {
    opacity: 0.5;
  }
`
export const ListItem = styled.div`
width: 500px;
height: 60px;
background: ${props => props.isFinished ? "#E8FF8B" : "#E4E4E4"};
box-shadow: rgba(232, 255, 139, 1);
border: none;
border-radius: 10px;
margin-top: 15px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;

li {
  list-style: none;
  
}
`
export const Trash = styled(FcFullTrash) `
width: 30px;
cursor: pointer;
`
export const Check = styled(FcCheckmark) `
width: 30px;
cursor: pointer;
`
export const H3 = styled.h3 `
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
border-bottom: 1px solid #8052EC;
width: 35%;

`




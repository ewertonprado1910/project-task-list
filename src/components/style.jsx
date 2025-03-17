import styled from "styled-components";
import { FcFullTrash, FcCheckmark } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Container = styled.div`
background-image: url("https://picsum.photos/1920/1080?grayscale");
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px 0;
`
export const Title = styled.h1`
color: #000000;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 200px;
box-shadow: 2px 2px 0px 1px rgba(0, 0, 0, 5.4);

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
@media screen and (max-width: 900px) {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

@media screen and (max-width: 900px) {
  width: 100%;
  margin: 0px 5px 20px 0px;
}
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
@media screen and (max-width: 900px) {
  width: 100%;
  margin: 10px 0px 0px -10px;
  
}
`
export const Trash = styled(FcFullTrash)`
width: 30px;
cursor: pointer;
`
export const Check = styled(FcCheckmark)`
width: 30px;
cursor: pointer;
`
export const H3 = styled.h3`
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
border-bottom: 1px solid #8052EC;
width: 35%;

@media screen and (max-width: 900px) {
  width: auto;
  font-size: 15px;
}
`
export const StyledToastContainer = styled(ToastContainer)`
&& {
    width: 350px;

    .Toastify__toast {
      border-radius: 10px;
      font-size: 16px;
      padding: 12px 16px;
      color: #fff; 
    }

    .Toastify__toast--success {
      background-color: #28a745; 
    }

    .Toastify__toast--error {
      background-color: #dc3545;
    }

    .Toastify__toast--warning {
      background-color: #ffc107; 
    }

    .Toastify__toast--info {
      background-color: #17a2b8; 
    }

    @media screen and (max-width: 768px) {
      width: 50%;
      left: 50%;
      margin-top: 10px;
      transform: translateX(-50%);
    }
  }
`







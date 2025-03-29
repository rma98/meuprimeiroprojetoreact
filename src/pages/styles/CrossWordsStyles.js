import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(180deg, #87ceeb, #ffffff);
  text-align: center;
  padding: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 5px;
  margin-top: 20px;
`;

export const Cell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? (props.correct ? "#4CAF50" : "#FF5733") : "#fff"};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MessageContainer = styled.div`
  text-align: center;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  h2 {
    margin-bottom: 15px;
  }

  button {
    background: white;
    color: red;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background: darkred;
      color: white;
    }
  }
`;

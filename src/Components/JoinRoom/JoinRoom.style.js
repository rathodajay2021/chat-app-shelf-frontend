import styled from "styled-components";

export const JoinRoomWrapper = styled.div`
  background-color: #ecf5f2;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form-wrapper {
    background-color: rgba(45, 48, 71, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    /* height: 60vh; */
    min-height: 20vh;
    padding: 1rem;
    gap: 20px;

    @media only screen and (max-width: 600px) {
      height: 100vh;
    }

    .title {
      color: white;
      font-size: 22px;
      font-weight: 800;
      text-transform: capitalize;
    }

    .input-field {
      background: #fff;
      border-radius: 5px;
    }

    .submit-btn {
      height: 50px;
      border-radius: 10px;
      font-weight: bold;
      background-color: #25d366;
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 2rem;
  background-color: grey;
  padding: 0 1rem 2rem;

  .title {
    font-size: 4rem;
    text-align: center;
  }

  .announcements {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;

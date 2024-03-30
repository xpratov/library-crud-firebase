import styled from "styled-components";
interface ICard {
  title: string;
  author: string;
}

const StyledCard = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  max-width: 300px;
  div {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  article {
    text-transform: capitalize;
  }
  article > h1 {
    font-size: 2rem;
  }
  article > span {
    font-size: 1.5rem;
  }
`;

const Card: React.FC<ICard> = ({ author, title }) => {
  return (
    <StyledCard>
      <div>
        <img src="/read.png" alt="img" />
      </div>
      <article>
        <h1>{title}</h1>
        <span>{author}</span>
      </article>
    </StyledCard>
  );
};

export default Card;

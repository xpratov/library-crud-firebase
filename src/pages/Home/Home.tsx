import styled from "styled-components";
import { Container } from "../../general/components/Container";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
const StyledContainer = styled(Container)`
  padding-top: 20px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState<any[]>([]);
  const getData = async () => {
    const snap = await getDocs(collection(db, "books"));
    snap.forEach((e) => setDatas((prev) => [...prev, e.data()]));
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <StyledContainer>
      {loading
        ? "Loading"
        : datas.length > 0
        ? datas.map((e, i) => (
            <Card key={i} title={e.title} author={e.author} />
          ))
        : "No nothing"}
    </StyledContainer>
  );
};

export default Home;

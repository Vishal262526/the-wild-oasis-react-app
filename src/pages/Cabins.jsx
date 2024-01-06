// import styled from "styled-components";
import CabinTable from "../ui/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as={"h1"}>Cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;

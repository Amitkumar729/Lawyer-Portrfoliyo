import {
  ParaGraph,
  PracticeElementTitle,
  PracticeElementWrap,
  PracticeWrap,
  Practicess,
} from "../../styles/component/practiceArea";
import { Heading } from "../heading";

export const PracticeArea = () => {
  return (
    <PracticeWrap>
      <Heading velue={"Practice Area"} />
      <ParaGraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fugit!
        Possimus deleniti aperiam consectetur culpa excepturi corrupti vel
        maxime voluptatibus neque eaque nisi voluptatum, veniam distinctio
        facere veritatis libero eum?
      </ParaGraph>
      <Practicess>
        <PracticeElementWrap>
          <PracticeElementTitle>Criminals</PracticeElementTitle>
          <ParaGraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            maiores fugiat quaerat odit quia veniam labore dolores ut? Ipsam
          </ParaGraph>
        </PracticeElementWrap>
      </Practicess>
    </PracticeWrap>
  );
};

import { Practices } from "../../constant/practiceArea";
import {
  ParaGraph,
  PracticeElementTitle,
  PracticeElementWrap,
  PracticeWrap,
  Practicess,
} from "../../styles/component/practiceArea";
import { Heading } from "../heading";
import { Banner } from "../banner";

export const PracticeArea = () => {
  return (
    <PracticeWrap>
      <Heading value={"Practice Area"} />
      <Practicess>
        {Practices.map((item, index) => {
          return (
            <PracticeElementWrap>
              <PracticeElementTitle>{item.title}</PracticeElementTitle>
              {/* <ParaGraph>{item.description}</ParaGraph> */}
            </PracticeElementWrap>
          );
        })}
      </Practicess>
    </PracticeWrap>
  );
};

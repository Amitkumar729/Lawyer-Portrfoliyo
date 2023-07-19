import { Practices } from "../../constant/practiceArea";
import {
  PracticeElementTitle,
  PracticeElementWrap,
  PracticeWrap,
  Practicess,
} from "../../styles/component/practiceArea";
import { Heading } from "../heading";

export const PracticeArea = () => {
  return (
    <PracticeWrap>
      <Heading value={"Practice Area"} />
      <Practicess>
        {Practices.map((item, index) => {
          return (
            <PracticeElementWrap key={index}>
              <PracticeElementTitle>{item.title}</PracticeElementTitle>
            </PracticeElementWrap>
          );
        })}
      </Practicess>
    </PracticeWrap>
  );
};

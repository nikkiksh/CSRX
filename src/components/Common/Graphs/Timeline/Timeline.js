import React from "react";
import styled from "styled-components";
 
const DisplayFlex = styled.div`
  width: 100%;
  display: flex;
`;
 
const TimelineWrapper = styled.div`
 padding-top:30px;
`;
const TimeFragments = styled.div`
  border-top: 1px solid black;
  ${props => props.width && `width: ${props.width * 2.5}%;`}
`;
 
const BreakPoints = styled.div`
  width: 6px;
  height: 6px;
  ${props => props.span && `transform:translate(${props.span * 25}px,-3px);`}
 
  border-radius: 50%;
  background: black;
`;
 
const Items = [
  { title: "A", text: "Alpha" },
  { title: "E", text: "Everest" },
  { title: "B", text: "Bravo" },
  { title: "C", text: "Charlie" },
  { title: "D", text: "Delta" }
];
 
const TimelineChart = () => (
  <TimelineWrapper>
    <DisplayFlex>
      {Items &&
        Items.map((each, index) => (
          <TimeFragments width={each.text.length}>
            <DisplayFlex>
              <>
                {each.title}
                <br />
                {each.text}
              </>
              <BreakPoints span={each.text.length} />
            </DisplayFlex>
          </TimeFragments>
        ))}
    </DisplayFlex>
  </TimelineWrapper>
);
 
export default TimelineChart;
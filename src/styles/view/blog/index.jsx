import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
/* border: 1px solid grey; */
display: flex;
align-items: center;
flex-direction: column;
margin-top: 10px;


`;
export const ContainerWrapper = styled.div`
max-width: 1400px;
display: flex;
flex-direction: column;
gap: 20px;

`;

export const HeadingContainer = styled.div`
width: 100%;
height: 40px;
`;

export const BlogContainer = styled.div`
width: 100%;
max-width: 1000px;
padding: 10px;
border-radius: 10px;
box-shadow: 10px 10px 10px  lightgray;
&:hover{
    border: 1px solid orange;
    cursor: pointer;
}
`;

export const HeadingWrapper = styled.div`
width: 100%;
font-size: 30px;
display: flex;
gap: 10px;
`;
export const BodyContainer = styled.div`
    width: 100%;
   

`;

export const BodyEnding = styled.div`
    width: 100%;

`;
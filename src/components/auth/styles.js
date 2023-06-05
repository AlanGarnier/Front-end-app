import styled from 'styled-components';

export const H1 = styled.h1`
padding-top: 20px;
text-align: center;
font-size: 30px;
color : black;
`;

export const H1White = styled.h1`
padding-top: 20px;
text-align: center;
font-size: 30px;
color : white;
`;

export const H2 = styled.h2`
font-weight: 300;
text-align: center;
font-size: 16px;
margin: auto;
padding-bottom: 10px;
color : black;
`;

export const Container = styled.div`
display: flex;
.submit-return {
    background: #13678A;
    transition: .3s ease-out;
    cursor: pointer;
    margin-top: 20px;
    padding: 0 30px;
    width: 120px;
    height: 40px;
    margin: 10px 0;
    border-radius: 8px;
    color: white;
    margin-left: 10px;

    &:hover {
        background: #13678A;
    }
}
.form-container {
    color: grey; 
}
`;

export const Container2 = styled.div`

`;

export const P = styled.p`
margin-right: 300px;
margin-left: 300px;
`;

export const ContainerBlue = styled.div`
text-align: center;
background-color: #13678A;
min-height: 650px;
padding-top: 20px;
`;

export const ContainerWhite = styled.div`
text-align: center;
min-height: 650px;
`;


export const Span = styled.span`
    color: grey;
    text-decoration: none;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 25px;
    text-align-last: center;   
    a {
        color: grey;
        text-decoration: none;
        font-weight: bold;
        }
    }
`

export const AuthForm = styled.div`
position: absolute;
width: 651px;
left: calc(50% - 651px/2 - 0.5px);
top: 200px;
padding: 30px;
background: #F5F5F6;
border-radius: 32px;
`;

export const RelativeParentContainer = styled.div`
position: relative;
top: 0;
left: 0;
width: 100%;
padding-bottom: 20px;

`;

import styled from "styled-components";


const Wrapper = styled.div`
    .leftForm {
        text-align: center;
        text-transform: uppercase;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.primary};
    }

    .rightForm {
        padding-left: 30px;
        text-align: center;
        text-transform: uppercase;
        font-size: 1rem;
    }
`;

export default Wrapper;
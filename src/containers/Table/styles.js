import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 300px;
        display: grid;
        grid-row-gap: 1rem;
    }
//     filter: blur(2px);
//   -webkit-filter: blur(2px);
`;

export const Title = styled.h1`
    a {
        color: #0070f3;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }

    margin: 0;
    line-height: 1.15;
    font-size: 4rem;

    text-align: center;
`;
export const Description = styled.p`
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;

    code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    }

    a {
        color: #0070f3;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }
`;

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const Card = styled.a`
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;

    &:hover,
    &:focus,
    &:active {
        color: #0070f3;
        border-color: #0070f3;
    }

    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }
`;
export const DrawTable = styled.table`
    border: 1px solid #a5c9ff;
    border-collapse: separate;
    border-radius:6px;
    -moz-border-radius:6px;
    border-spacing: 0rem;
    margin: auto;
   
    th {
        color:#194a84;
        text-align:center;
        border-bottom: 1px solid #a5c9ff;
        padding: 10px;
        
    }



    tbody > tr:hover {
        cursor:pointer;
        background-color: #a5c9ff;
        color:white;
    }

    tbody > tr:active {
        background-color: #a5c9ff;
        color:white;
    }

    td {
        color:#194a84;
        font-weight: 600;
        text-align:center;
        border:none;
        padding: 20px 20px;
        border-bottom: 1px solid #a5c9ff;
    }
`;



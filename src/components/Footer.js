import styled from "styled-components";

const Footer = () => {
    const FooterContainer = styled.div`
        background-color: #f1eded;
        position: absolute;
        display: flex;
        width: 100%;
        algin-items: center;
        margin-top: 3rem;
        flex-direction: row;
        left: 0px;
        right: 0px;
        align-content: space-around;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 1rem;
        padding-bottom: 1rem;
    `;
    return (
        <FooterContainer>
            footer
        </FooterContainer>
    );
}
export default Footer;
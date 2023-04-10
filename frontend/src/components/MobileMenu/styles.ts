import styled from "styled-components";

interface MenuProps {
  isOpen?: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--color-grey10);
  border-bottom: 1px solid var(--color-grey4);
`;

export const MenuDropdownSt = styled.div<MenuProps>`
  display: flex;
  height: 100%;
  padding: 0 5%;
  justify-content: space-between;
  align-items: center;
  > img {
    cursor: pointer;
  }

  .open {
    display: flex;
    width: 300px;
    position: absolute;
    border-top: 1px solid var(--color-grey6);
    top: 80px;
    right: 0;
    z-index: 1;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    .menu-list {
      width: 100%;
      background-color: var(--color-whiteFixed);
      padding-left: 0rem;

      li {
        padding: 1.5rem 1rem;
      }
      li a {
        font-size: 1rem;
        text-decoration: none;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        color: var(--color-grey2);
      }

      li:nth-child(4) {
        padding: 2rem 1rem 1rem 1rem;
        border-top: 1px solid var(--color-grey4);
      }

      li button {
        width: 100%;
        padding: 0.75rem 1.75rem;
        font-family: "Inter", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        background: var(--color-whiteFixed);
        border: 1px solid var(--color-grey4);
        border-radius: 4px;
        cursor: pointer;
        :hover {
          background-color: var(--color-grey8);
        }
      }
    }
  }

  .close {
    display: none;
  }
`;

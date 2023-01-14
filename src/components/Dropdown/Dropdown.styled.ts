import styled, { css, keyframes } from 'styled-components';
import { DropdownOptionsProps } from './Dropdown.d';

/** @todo use this data to build a safe area feature */
// const { innerHeight, innerWidth } = window;
//

const slideDown = keyframes`
  from {
    transform: translateY(-4px) scaleY(0.8);
    opacity: 0;
  }

  to {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
`;

const getPortalCss = ({ top, left, width, height }: DOMRect) => css`
    top: ${top + height + 4}px;
    left: ${left - 32}px;
    width: ${width + 32}px;
    animation: ${slideDown} 200ms ease-out;
    transform-origin: top;
`;

export const PortalUL = styled.ul<Pick<DropdownOptionsProps, 'wrapperRect'>>`
    list-style: none;
    position: absolute;
    ${({ wrapperRect }) => (wrapperRect ? getPortalCss(wrapperRect) : css``)};

    background-color: ${({ theme }) => theme.palette.background.main};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.palette.background.dark};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

export const ListItem = styled.li`
    cursor: pointer;
    position: relative;
    color: ${({ theme }) => theme.palette.text.primary};
    padding: 1rem;
    &:hover {
        background-color: ${({ theme }) => theme.palette.background.light};
    }
    &:last-of-type {
        &::after {
            display: none;
        }
    }
    &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.palette.background.dark};
    }
`;

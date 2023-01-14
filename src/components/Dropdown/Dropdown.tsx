import React, { useState, useRef, cloneElement, forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import _ from 'lodash';
import { useOutsideAlerter } from '@/lib/hooks/useOutsideClick';
import { DropdownFCProps, WithPortalHOC, DropdownOptionsProps } from './Dropdown.d';
import { PortalUL, ListItem } from './Dropdown.styled';

function withPortal<P extends object>(
    Component: React.ComponentType<P>,
): WithPortalHOC<P> {
    return forwardRef<HTMLElement, P>(function withPortal(props, ref) {
        return createPortal(<Component ref={ref} {...props} />, document.body);
    });
}

const DropdownOptions = forwardRef<HTMLUListElement, DropdownOptionsProps>(
    function DropdownOptions({ options, wrapperRect, closeDropdown, onChange }, ref) {
        const executeCallback = (callback?: (value: string) => void, value?: string) => {
            if (callback && typeof callback === 'function' && value) callback(value);
        };

        return (
            <PortalUL wrapperRect={wrapperRect} ref={ref}>
                {!!options &&
                    options.map(({ label, value, onClick }) => (
                        <ListItem
                            key={value}
                            onClick={() => {
                                executeCallback(onClick, value);
                                executeCallback(onChange, value);
                                closeDropdown();
                            }}
                        >
                            {label}
                        </ListItem>
                    ))}
            </PortalUL>
        );
    },
);

const DropdownPortal = withPortal(DropdownOptions);

const Dropdown: React.FC<DropdownFCProps> = ({ children, options, onChange }) => {
    const [wrapperRect, setWrapperRect] = useState<DOMRect>();
    const childrenRef = useRef<HTMLElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);

    const closeDropdown = () => setWrapperRect(undefined);

    useOutsideAlerter([ulRef, childrenRef], closeDropdown);

    const onClickWrapper = (event: React.MouseEvent<HTMLDivElement>) => {
        if (children.props.onClick && typeof children.props.onClick == 'function')
            children.props.onClick(event);
        if (childrenRef.current) {
            setWrapperRect(prevState =>
                prevState !== undefined
                    ? undefined
                    : childrenRef.current!.getBoundingClientRect(),
            );
        }
    };

    useEffect(() => {
        function onWindowResize() {
            setWrapperRect(prevState => {
                if (_.isNil(prevState)) return;
                if (!_.isNil(childrenRef.current))
                    return childrenRef.current.getBoundingClientRect();
            });
        }

        window.addEventListener('resize', onWindowResize);
        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return (
        <>
            {!!wrapperRect && (
                <DropdownPortal
                    options={options}
                    wrapperRect={wrapperRect}
                    closeDropdown={closeDropdown}
                    onChange={onChange}
                    ref={ulRef}
                />
            )}

            {cloneElement(children, { ref: childrenRef, onClick: onClickWrapper })}
        </>
    );
};

export default Dropdown;

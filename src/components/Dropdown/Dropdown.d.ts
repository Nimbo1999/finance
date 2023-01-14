export type DropdownOption = {
    value: string;
    label: string;
    onClick?: (value: string) => void;
};

export interface DropdownProps {
    children: React.ReactElement;
    options?: DropdownOption[];
    onChange?: (value: string) => void;
}

export interface DropdownFCProps extends DropdownProps {}

export interface DropdownOptionsProps {
    options?: DropdownProps['options'];
    wrapperRect: DOMRect;
    closeDropdown: () => void;
    onChange: DropdownProps['onChange'];
}

export type WithPortalHOC<P = {}> = ForwardRefExoticComponent<
    PropsWithoutRef<P> & RefAttributes<HTMLElement>
>;

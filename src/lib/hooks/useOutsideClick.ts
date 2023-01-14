import { useEffect, RefObject } from 'react';
import _ from 'lodash';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter<T extends HTMLElement>(
    refs: RefObject<T> | RefObject<T>[],
    callback: () => void,
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            function clickEventContainsRef(refCurrent: RefObject<T>['current']): boolean {
                return !!refCurrent && !refCurrent.contains(event.target as HTMLElement);
            }

            if (_.isArray(refs)) {
                if (refs.every(({ current }) => clickEventContainsRef(current))) {
                    return callback();
                }
                return;
            }

            if (!_.isNil(refs?.current)) {
                if (clickEventContainsRef(refs.current)) callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
}

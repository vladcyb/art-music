import { useLayoutEffect } from 'react';
import { useAppDispatch } from '../../stores';
import { actions as mediaActions } from '../../stores/mediaSlice/actions';
import { breakpoints } from '../constants/breakpoints';
import { StateType as MediaState } from '../../stores/mediaSlice/types';
import { isInRange } from '../helpers/isInRange';

export const useMedia = () => {
  const dispatch = useAppDispatch();

  const update = () => {
    const windowWidth = window.innerWidth;
    const media: MediaState = {
      unknown: false,
      xs: windowWidth < breakpoints.sm,
      sm: isInRange(windowWidth, breakpoints.sm, breakpoints.md),
      md: isInRange(windowWidth, breakpoints.md, breakpoints.lg),
      lg: isInRange(windowWidth, breakpoints.lg, breakpoints.xl),
      xl: windowWidth > breakpoints.xl,
    };
    dispatch(mediaActions.setMedia(media));
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener('resize', update);
  });
};

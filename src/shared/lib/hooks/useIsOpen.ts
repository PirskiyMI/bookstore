import { useCallback, useState } from 'react';

export const useIsOpen = () => {
   const [isOpen, setIsOpen] = useState(false);

   const handleOpen = useCallback(() => setIsOpen(true), []);
   const handleClose = useCallback(() => setIsOpen(false), []);

   return { isOpen, handleOpen, handleClose };
};

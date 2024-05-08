import { ReactNode } from 'react';

export interface ISocial {
   title: string;
   url: string;
   isMail?: boolean;
   icon?: ReactNode;
}

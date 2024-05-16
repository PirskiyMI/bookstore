interface IArguments {
   pathname: string;
   to: string;
   classNames: {
      className: string;
      classNameActive: string;
   };
}

export const isActive = ({ pathname, to, classNames }: IArguments) => {
   const { className, classNameActive } = classNames;
   const isActive = pathname === to;
   const classes = isActive ? `${className} ${classNameActive}` : className;
   return classes;
};

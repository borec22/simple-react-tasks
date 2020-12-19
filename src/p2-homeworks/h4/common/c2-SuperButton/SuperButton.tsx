import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type VariantType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
type SizeType = 'small' | 'medium' | 'large';

type SuperButtonPropsType = DefaultButtonPropsType & {
   red?: boolean
   size?: SizeType
   variant?: VariantType
}

const SuperButton: React.FC<SuperButtonPropsType> = (
   {
      variant,
      size,
      red,
      className,
      ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
   }
) => {
   const [isMouseDown, setIsMouseDown] = useState(false);

   const finalClassName = `
      ${s.button} 
      ${variant ? s[variant] : ''}
      ${size ? s[size] : ''} 
      ${red ? s.red : ''}
      ${isMouseDown? s.mouseDown : ''}
      ${className}
   `;


   const onMouseDownHandler = () => setIsMouseDown(true);
   const onMouseUpHandler = () => setIsMouseDown(false);

   return (<>
         <button className={finalClassName} onMouseDown={onMouseDownHandler} onMouseUp={onMouseUpHandler} {...restProps} />
      </>
   );
}

export default SuperButton;

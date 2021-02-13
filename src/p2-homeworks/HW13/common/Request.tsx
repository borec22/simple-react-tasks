import React, {useState} from 'react';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import {ResponseType, testApi} from '../api/requestAPI';
import {Preloader} from '../../h10/Preloader/Preloader';

type PropsType = {};


export const Request: React.FC<PropsType> = (props) => {

   const [error, setError] = useState<any>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState<ResponseType | null>(null);
   const [value, setValue] = useState<boolean>(false);

   const onClickHandler = async () => {

      try {
         if (error) {
            setError(null);
         }

         setIsLoading(true);

         const data = await testApi.requestPost(value);

         setData(data);
      } catch (error) {
         error.response ? setError(error.response.data.errorText) : setError(error.message);
      } finally {
         setIsLoading(false);
      }

   }

   if (isLoading) {
      return <Preloader/>
   }

   return (
      <div>
         <SuperCheckbox checked={value} onChangeChecked={setValue}/>
         <SuperButton variant={'primary'} size={'medium'} onClick={onClickHandler}>request</SuperButton>

         <hr/>

         <div>{error ? error : JSON.stringify(data, undefined, 2)}</div>
      </div>
   );
}
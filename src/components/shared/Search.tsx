import React, { FC, SyntheticEvent, useCallback, useContext, useState } from 'react'
import { FlexRow } from './Flex'
import {GiCancel} from 'react-icons/gi';
import { SearchContext } from '../../contexts/SearchContext';

interface PropsInterface {

}

export const Search: FC<PropsInterface> = () => {
  const {value, setValue} = useContext(SearchContext)!;

    

    const onChange = useCallback((event: {target: { value: string}}) => {
      setValue(event.target.value);
    }, []);
    
    const onClear = useCallback(() => {
        setValue("");
    }, []);
    
  return (
    <FlexRow width='100%' justifyContent='center' padding='10px' gap='10px'>
        <input placeholder='search' value={value} onChange={onChange}/>
        <GiCancel size="20px" onClick={() => onClear()}/>
    </FlexRow>
  )
}

import React, { useContext } from 'react';
import { FlexColumn } from '../shared/Flex';
import { UserItem } from './UserItem';
import { Search } from '../shared/Search';
import { SearchContext } from '../../contexts/SearchContext';

export const UsersList = () => {

  const {users, userSearchResults} = useContext(SearchContext)!;

 
  return (<FlexColumn width='100%' justifyContent='center' alignItems='center'>
  <FlexColumn width='30%' alignItems='center' justifyContent='center'>
    <Search />
    <h1>Users</h1>
{!userSearchResults ? users?.map((user)=>(<UserItem user={user}/> )) : userSearchResults.map((user)=>(<UserItem user={user}/> ))}
  </FlexColumn>
  </FlexColumn>
  )
}

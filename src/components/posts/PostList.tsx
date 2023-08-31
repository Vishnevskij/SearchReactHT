import React, { useContext } from 'react';
import { PostInterface } from './types';
import { FlexColumn } from '../shared/Flex';
import { PostItem } from './PostItem';
import { SearchContext } from '../../contexts/SearchContext';
import { Search } from '../shared/Search';


export const PostList = () => {

  const {posts, postsSearchResults} = useContext(SearchContext)!;
    
  return (
    <FlexColumn width='100%' justifyContent='center' alignItems='center'>
    <FlexColumn width='70%' alignItems='center'>
    <Search />
      <h1>Posts</h1>
    {!postsSearchResults ? posts?.map((post: PostInterface)=>(<PostItem post={post}/> )) : postsSearchResults?.map((post: PostInterface)=>(<PostItem post={post}/> ))}
      </FlexColumn>
      </FlexColumn>
  )
}

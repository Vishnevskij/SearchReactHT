import React, { useContext } from 'react'
import { CommentInterface } from './types';
import { FlexColumn } from '../shared/Flex';
import { CommentItem } from './CommentItem';
import { SearchContext } from '../../contexts/SearchContext';
import { Search } from '../shared/Search';

export const CommentsList = () => {
    
  const {comments, commentsSearchResults} = useContext(SearchContext)!;

  return (
    <FlexColumn width='100%' justifyContent='center' alignItems='center'>
            <FlexColumn width='30%' alignItems='center' justifyContent='center'>
            <Search />
    <h1>Comments</h1>
{!commentsSearchResults ? comments?.map((comment: CommentInterface)=>(<CommentItem comment={comment}/> )) : commentsSearchResults.map((comment: CommentInterface)=>(<CommentItem comment={comment}/> ))}
            </FlexColumn>
  </FlexColumn>
  )
}

import { Dispatch, FC, PropsWithChildren, createContext, useState } from "react";
import { PostInterface } from "../components/posts/types";
import { DashboardUserInterface } from "../components/users/types";
import { useFetchData } from "../hooks/useFetchData";
import { CommentInterface } from "../components/comments/types";

interface SearchContextInterface {
    users: DashboardUserInterface[],
    posts: PostInterface[],
    comments: CommentInterface[],
    value: string,
    setValue: Dispatch<string>,
    userSearchResults: DashboardUserInterface[],
    postsSearchResults: PostInterface[],
    commentsSearchResults: CommentInterface[]
}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export const SearchContextProvider: FC<PropsWithChildren> = ({children}) => {
   
    const [value, setValue] = useState<string>("");

    const { data: users } = useFetchData<DashboardUserInterface[]>(
        "https://jsonplaceholder.typicode.com/users",
      );

      const { data: posts} = useFetchData<PostInterface[]>(
        "https://jsonplaceholder.typicode.com/posts",
      );

      const { data: comments} = useFetchData<CommentInterface[]>(
        "https://jsonplaceholder.typicode.com/comments",
      );

      const userSearchResults = users ? users?.filter(({name, email}) => name.toLowerCase().includes(value) || email.toLowerCase().includes(value)) : [];
      const postsSearchResults = posts ? posts?.filter(({title, body})=> title.toLowerCase().includes(value) || body.toLowerCase().includes(value)) : [];
      const commentsSearchResults = comments ? comments?.filter(({name, email, body}) => name.toLowerCase().includes(value) || email.toLowerCase().includes(value) || body.toLowerCase().includes(value)) : [];
  
  return <SearchContext.Provider value={{value, setValue, users: users || [], posts: posts || [], comments: comments || [], userSearchResults, postsSearchResults, commentsSearchResults}}>
        {children}
        </SearchContext.Provider>
}
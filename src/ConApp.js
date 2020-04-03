import React, { createContext, useContext } from 'react'

//0.AppContext 생성
const AppContext = createContext()

const ConApp = () => {
    const user = {
        nickname:'bomba',
        isAdmin:true
    }

    return(
        <AppContext.Provider value={user}>
            <div>
                <Posts />
            </div>
        </AppContext.Provider>
    )
}

//1. PostsContext 생성
const PostsContext = createContext()

const Posts = () => {
    const posts = [
        {title : 'escaped from the zoo',
         content : 'bomba escaped from the zoo'},
        {title: 'english',
         content: 'happy english timem'}
    ]
    
    return (
        <PostsContext.Provider value={posts}>
            <Children />
        </PostsContext.Provider>
    )
}

//2. user와 posts를 가져와 화면에 보여주기
const Children = () => {
    const user = useContext(AppContext)
    const posts = useContext(PostsContext)
    
    let label = 'user' // label 기본값 user
    if (user.isAdmin){ //user가 Admin이면
        label = 'admin'
    }

    return(
        <div>
            <div>권한 : {label}</div>
            <div>닉네임 : {user.nickname}</div>
            <div>----------------------------------</div>
            <div>{posts.map((post, index) => (
                <div key={index}>
                    <div>No : {index+1}</div>
                    <div>제목 : {post.title}</div>
                    <div>내용 : {post.content}</div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ConApp;

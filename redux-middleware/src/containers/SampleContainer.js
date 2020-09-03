import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sample from '../components/Sample';
import {getPost, getUsers} from '../modules/sample';

const SampleContainer = () =>{
    const post = useSelector(state => state.sample.post);
    const users = useSelector(state => state.sample.users);
    const loadingPost = useSelector(state => state.loading['sample/GET_POST']);
    const loadingUsers = useSelector(state => state.loading['sample/GET_USERS']);
    const dispatch = useDispatch()
    useEffect(()=>{
        const fn = async () =>{
            try{
                await dispatch(getPost(1))
                await dispatch(getUsers());
            } catch(e){
                console.log(e);
            }
        }
        fn();
    }, [getPost, getUsers]);
    return(
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    )
}

export default SampleContainer;
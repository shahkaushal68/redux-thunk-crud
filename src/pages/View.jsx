import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../redux/actions';
import { userTypes } from '../redux/constants';

const View = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    //console.log("pageId", id);
    useEffect(() => {
      const fetchSingleUser = async (id) => {
        const res = await getSingleUser(id);
        //console.log("res", res);
        dispatch({
            type: userTypes.GET_SINGLE_USER,
            payload:res.data
        })
      }
      fetchSingleUser(id)
    }, [id, dispatch])
    
  return (
    <div>View</div>
  )
}

export default View
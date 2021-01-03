import React,{useState,useEffect} from 'react'
import firebaseDb from "../firebase";

const Stories = () => {

    var [storiesObjects,setStoriesObjects] = useState([])
    //var [currentId,setCurrentId] = useState('')

    const initialFieldValues = {
        createdDate:'',
        key:'',
        refrence:'',
        storyTitle:'',
        updatedOn:'',
        storyList:{
            addedDate:'',
            content:'',
            partTitle:'',
            title:''
        }
    }

    useEffect(()=>{
        firebaseDb.child("stories").on('value',snapshot =>{
            if(snapshot.val()!=null){
                setStoriesObjects({
                    ...snapshot.val()
                })
            }else{
                setStoriesObjects({})
            }
        })
    },[]) 


    return (
        <>
            <div>
                <a>List</a>
            </div>

            <div>
                <table>
                <tbody>
                        {
                            Object.keys(storiesObjects).map(id=>{
                                return <tr key={id}>
                                    <td>{storiesObjects[id].storyTitle}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Stories

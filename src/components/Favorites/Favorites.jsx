import React, { Component, useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBtn } from '../../State/Slice/CardSlice';
import { addClick } from '../../State/Slice/PostSlice';


const Favorites =  ()=> {
    const favori = useSelector(state=>state.cart.list);
    const dispatch = useDispatch()
   const [favoriState,setFavoriState] = useState([])
   const [state,setState] =  useState({
    "title": "",
    "movies": ""
}
)
console.log(favori)
    const changeSpisok = (e)=>{
        setState({title:e.target.value,movies:[...favori]})
        
    }
    const handleClick = async(title,movies)=>{
        
      if(title!==''){
       
        const response = await fetch('https://acb-api.algoritmika.org/api/movies/list',{
            method:'POST',
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                title:title,
                movies:movies
            })
        })
        
        const data = await response.json();
        dispatch(addClick(data))
        setState({title:'',movies:''})
      }
     else alert('Favorilər listinə ad verin')
    }
    const {title}=state

   return (                
               <div>
                {
                    
                    
                            <div className="favorites">
                            <input value={title} className="favorites__name" onChange={changeSpisok} required/>
                            <ul className="favorites__list">
                                {favori?.map((element) => {
                                    return (
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',padding:'10px'}} key={element.id}>
                                            <div style={{display:'flex',justifyContent:'start',gap:'0px 10px',alignItems:'center',width:'90%'}}>
                                            <img style={{width:'50px',height:'50px'}} src={element.poster} alt="" />
                                            <li  >{element.title} ({element.year})
                                                
                                              </li>
                                            </div>
                                            <button onClick={()=>dispatch(deleteBtn({id:element.id}))} >x</button>
                                        </div>
                                    )
                                })}
                            </ul>
                            
                            <button type="button" className="favorites__save" onClick={()=>handleClick(state.title,state.movies)}>Сохранить список</button>
                        </div>
                        
                            }
                
               </div>
            );
}
 
export default Favorites;
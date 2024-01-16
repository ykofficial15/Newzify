/* eslint-disable array-callback-return */
import React, { Component } from 'react'

export default class Desc extends Component {
  render() {
    let {title,description,imgUrl,newsUrl}=this.props;
   const mystyle={
    display:'flex',
    width:'100%',
    border:'1px solid black',
    margin:'10px'
   }
   const imgstyle={
    height:'200px',
    width:'200px',

   }
    return (
      <div className='container'>
    <div className='bigbox' style={mystyle}>
      <div className='box1' style={{padding:'10px'}}>
        <img src={imgUrl} alt='Here is News' style={imgstyle}/>
      </div>
      <div className='box2' style={{padding:'10px'}}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a className='btn btn-primary' href={newsUrl}>Read News</a>
      </div>
    </div></div>
     
    )
  }
}

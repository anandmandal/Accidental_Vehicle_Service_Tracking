import React from 'react'

function ImgContentCard({image,imgPosition,content}) {
    return (
        imgPosition == 'right' ? (
            <div style={{ width: '100%', height: 400,margin:'30px auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
                <div style={{ width: '50%', height:'100%',backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'10px 0 0 10px'}}>
                <img src={image} style={{width:450,height:300,borderRadius:'5px',padding:'3px 5px'}}/>
               </div>
                <p style={{fontSize:'18px',color:'#153448', padding:'5px',maxWidth:'50%',marginLeft:'10px'}}>{content}</p> 
        </div>
        ) : (<div style={{ width: '100%', height: 400, display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
        <p style={{fontSize:'18px',color:'#153448', padding:'5px', maxWidth:'50%',marginRight:'10px'}}>{content}</p> 
        
        <div style={{ width: '50%', height:'100%',backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'0 10px 10px 0',padding:'3px 5px'}}>
        <img src={image} style={{width:450,height:300,borderRadius:'5px',}}/>
       </div>
        
</div>)
  )
}

export default ImgContentCard
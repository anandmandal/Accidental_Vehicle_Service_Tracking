import React from 'react'

export const LabelValueBox = (props) => {
    const labelStyle = {
        fontSize: '18px',
        color:'#202A44',
        fontWeight: '600',
        textAlign:'center'
    }
    const valueStyle = {
        fontSize: '16px',
        color:'#202A44',
        textAlign:'center'
    }
  return (
      <div style={{display:'flex',justifyContent:'space-between', maxWidth:'600px',alignItems:'center',height:'100%'}}>
          <div style={labelStyle}>{props.label}</div>
          <div style={valueStyle}>{props.value}</div>
      </div>
  )
}

import React, { Component } from 'react'
import loading from '../loading.gif'

const spinner = () =>{
        return (
            <div>
                <img src={loading} alt="" style={{width:'4%'}} />
            </div>
        )
}

export default spinner

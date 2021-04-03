import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Media =  props=>{

    const{min, max} = props

    const Media = (min+max)/2

    return(
        <Card title="Media" green>
            <div>
                <span>Resultado: </span>
                <strong>{Media}</strong>
            </div>
        </Card>
    )
}

function mapStateToProps(state){

    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)
import React from 'react';
import loadingImage from '../images/loading.gif'
const Loading = () => {
  return (
    <picture>
        <img src={loadingImage} alt="loading" />
    </picture>
  )
}

export default Loading

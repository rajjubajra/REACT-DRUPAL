import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ColourMode from '../components/ColourMode/ColourMode';
import NavigationOne from '../components/header/NavigationOne/NavigationOne';
import MasonryCmp from '../components/MasonryCmp/MasonryCmp';
import Gallery from './Gallery.json';

function Home() {

  const className = useSelector(state => state.reducerSelectColourMode.colourMode);

  /** TAXONOMY ID [useParams()] */
  const { catId } = useParams();
  const [data, setData] = useState([]);


  useEffect(() => {

    catId === 'all'
      ? setData(Gallery)
      : setData(Gallery.filter(item => {
        return item.category === catId
      }))

  }, [catId])


  return (
    <div className="photography-one">
    <div className={className}>
        <ColourMode />
        <NavigationOne />

        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <MasonryCmp data={data} />
            </div>
          </div>
    
    </div>
    </div>
  )
}

export default Home

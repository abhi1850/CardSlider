import React, { useState, useEffect } from 'react';
import './all.css';
import img1 from '../images/news1.jpg';
import img2 from '../images/news2.jpg';
import img3 from '../images/news3.jpg';
import img4 from '../images/news4.jpg';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';


const Slider = () => {

  const StyledCard = styled(Card)`
    position: absolute;
    inset: 0;
    overflow: hidden;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: opacity 0.5s;
  `;

  const nextClick = () => {
    setItemActive((prevItemActive) => (prevItemActive + 1) % countItem);
  };

  const prevClick = () => {
    setItemActive((prevItemActive) => (prevItemActive - 1 + countItem) % countItem);
  };

  const thumbnailClick = (index) => {
    setItemActive(index);
  };

  const [itemActive, setItemActive] = useState(0);

  const items = [
    {
      image: img1,
      title: 'Slider 01',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img2,
      title: 'Slider 02',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img3,
      title: 'Slider 03',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img4,
      title: 'Slider 04',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img2,
      title: 'Slider 05',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img1,
      title: 'Slider 01',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img1,
      title: 'Slider 01',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img1,
      title: 'Slider 01',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img4,
      title: 'Slider 04',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
    {
      image: img4,
      title: 'Slider 04',
      date : '02-04-2023',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.',
    },
  ];

  const countItem = items.length; //Total number of items

  //Automatically switch between next items
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      nextClick();
    }, 5000);
    return () => clearInterval(refreshInterval); //claen the intervalon component unmount
  }, [itemActive]);

  //hook to scroll the thumbnail container to show the active thumbnail
  useEffect(() => {
    // Scroll thumbnail container to display active thumbnail
    const thumbnailContainer = document.querySelector('.thumbnail');
    const thumbnailItem = document.querySelector('.thumbnail .item.active');
    if (thumbnailContainer && thumbnailItem) {
      thumbnailContainer.scrollLeft = thumbnailItem.offsetLeft - (thumbnailContainer.offsetWidth - thumbnailItem.offsetWidth) / 2;
    }
  }, [itemActive]);

  return (
    <>
      <header>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Contact</a>
        </nav>
      </header>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className='slider'>
            <Grid container justifyContent="center">
              {items.map((item, index) => (
                <StyledCard key={index} active={itemActive === index}>
                  <img src={item.image} alt={`Slider ${index + 1}`} />
                  <div className='content'>
                    <p><LanguageIcon fontSize='medium' /> NewStreet NEWS</p>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </StyledCard>
              ))}
            </Grid>
            <div className='controls'>
              <button id="prev" onClick={prevClick}><UndoOutlinedIcon /></button>
              <button id="next" onClick={nextClick}><RedoOutlinedIcon /></button>
            </div>
            <div className='thumbnail'>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`item ${index === itemActive ? 'active' : ''}`}
                  onClick={() => thumbnailClick(index)}
                >
                  <img src={item.image} alt={`Slider ${index + 1}`} />
                  <div className='content'>{item.date} </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Slider;

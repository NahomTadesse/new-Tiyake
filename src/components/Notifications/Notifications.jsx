import { React, useState } from 'react';
import './Notifications.css'

export default function Notifications(){

    const [showQuestion, setShowQuestion] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [showUpdateProfile, setShowUpdateProfile] = useState(false);

    return (
        <div className='Container'> 
            <div className='Tile'>
                <img className='Tile-Img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPh-_HfjlFSK9CDChobn59DzHPrfQG9gmN2LgAfX5o7g&s" />
                <p className='Tile-info'>Update your Profile</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
            <div className='Tile'>
                <img className='Tile-Img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw0agOplNCfCHIZ7NqNvqGCXJP8AENnMbl8kCKWccmg&s" />
                <p className='Tile-info'>Someone Commented on your Question</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
            <div className='Tile'>
                <img className='Tile-Img' src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
                <p className='Tile-info'>Someone Raised a Question</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
            <div className='Tile'>
                <img className='Tile-Img' src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
                <p className='Tile-info'>Someone Raised a Question</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
            <div className='Tile'>
                <img className='Tile-Img' src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
                <p className='Tile-info'>Someone Raised a Question</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
            <div className='Tile'>
                <img className='Tile-Img' src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
                <p className='Tile-info'>Someone Raised a Question</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
            <div className='Tile'>
                <img className='Tile-Img' src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
                <p className='Tile-info'>Someone Raised a Question</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
            <div className='Tile'>
                <img className='Tile-Img' src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
                <p className='Tile-info'>Someone Raised a Question</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
            <div className='Tile'>
                <img className='Tile-Img' src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png" />
                <p className='Tile-info'>Someone Raised a Question</p>
                <p className='Time-stamp'>8:32 April 30 2012</p>
            </div>
        </div>
    )

}
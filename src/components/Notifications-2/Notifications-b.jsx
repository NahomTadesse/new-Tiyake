import { React, useState } from 'react'
import './Notifications-b.css'
import { Button } from 'reactstrap'
import StudentPreview from '../StudentPreview';
import Notifications from '../Notifications/Notifications';

export default function NotificationsB(){

    const [showQuestion, setShowQuestion] = useState(true);
    const [showNew, setShowNew] = useState(false);
    const [showViews, setShowViews] = useState(false)
    
    return (
        <div className='container'>
            <div className='notif-types'>
                <Button className='notif-button'
                    onClick={()=>{
                        setShowQuestion(true);
                        setShowNew(false);
                        setShowViews(false);
                    }}
                >Questions
                </Button>
                <Button className='notif-button'
                    onClick={()=>{
                        setShowQuestion(false);
                        setShowNew(true);
                        setShowViews(false);
                    }}>What's New</Button>
                <Button className='notif-button'
                    onClick={()=>{
                        setShowQuestion(false);
                        setShowNew(false);
                        setShowViews(true);
                    }}>Views</Button>
            </div>
            <div style={{ width: '100%'}}>
                    {
                        showQuestion ? (
                            <div>
                                <StudentPreview />
                                {/* <StudentPreview />
                                <StudentPreview /> */}
                            </div>

                        ) : showNew ? (
                            <Notifications />
                        ) : showViews ? (
                            <Notifications />
                        ) : (
                            ""
                        )
                    }
            </div>
        </div>
    )

} 
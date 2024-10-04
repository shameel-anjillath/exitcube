// src/ComingSoon.jsx
import React, { useState, useEffect } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-11-10T00:00:00'); // Set your target date here
        const currentTime = new Date();
        const difference = targetDate - currentTime;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="coming-soon">
            <h1>Coming Soon</h1>
            <p>Our website is under construction, but we’re launching soon!</p>
            <div className="countdown">
                <div className="time-box">
                    <span>{timeLeft.days || '0'}</span>
                    <p>Days</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.hours || '0'}</span>
                    <p>Hours</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.minutes || '0'}</span>
                    <p>Minutes</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.seconds || '0'}</span>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;

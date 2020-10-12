import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e: any) => e.preventDefault();

export function ImageCarousel() {

    const [imageArray, setImageArray] = useState<JSX.Element[]>();

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="image-container">
            <AliceCarousel fadeOutAnimation mouseTrackingEnabled items={imageArray} />
        </div>
    );



    async function loadData() {
        const result = await fetch('/api/test', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        console.log('this is the result: ', result)
        if (!result) {
            throw new Error('No result');
        }
        const resultJson = await result.json();
        if (!resultJson && !resultJson.imageData) {
            throw new Error('No JSON in result');
        }
        console.log('this is the resultJson: ', resultJson);

        const imageData: string[] = resultJson.imageData;

        setImageArray(imageData.map(image => {
            return <img src={`data:image/png;base64,${image}`} onDragStart={handleDragStart} className="yours-custom-class" />
        }));

        console.log('this is the image array', imageArray)
    }
}

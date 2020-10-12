import React, { useEffect, useState } from 'react';
import { ImageCarousel } from './ImageCarousel';

export function Gallery() {

    const [data, setData] = useState<{ code: string } | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="fade-in">
            <h1 className="gallery-p">Gallery</h1>
            {data && data.code}
            <ImageCarousel />
        </div>
    );

    async function fetchData() {
        console.log('Fetching data');
        const result = await fetch('/api/test', { method: 'GET' });
        const resultJson = await result.json();
        console.log(resultJson);
        setData(resultJson);
    }
}

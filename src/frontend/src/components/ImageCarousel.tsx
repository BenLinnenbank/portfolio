import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';

export function ImageCarousel() {
    const [processedData, setProcessedData] = useState('');

    useEffect(() => {
        loadData();
    });

    return (
        <Row>
            {processedData !== '' &&
                <img src={`data:image/png;base64,${processedData}`} />
            }
        </Row>
    );

    async function loadData() {
        const result = await fetch('/api/test', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!result) {
            throw new Error('No result');
        }
        const resultJson = await result.json();
        if (!resultJson) {
            throw new Error('No JSON in result');
        }
        setProcessedData(resultJson.imageData[0]);
    }
}
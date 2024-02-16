import React, { useState } from 'react';
import axios from 'axios';

function PredictionForm() {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        chestPainType: '',
        restingBloodPressure: '',
        serumCholesterol: '',
        fastingBloodSugar: '',
        restingECG: '',
        maxHeartRate: '',
        oldpeak: '',
        slopeOfPeak: '',
        exerciseInducedAngina: '',
        numMajorVessels: '',
        thal: ''
    });
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/predict/', { input_data: Object.values(formData).map(Number) });
            setPrediction(response.data.prediction);
        } catch (error) {
            setError('An error occurred while fetching data');
        }
    };

    // sourcery skip: avoid-function-declarations-in-blocks
    function convertToTitle(title) {
        // Convert camelCase to title case
        return title
            .replace(/([A-Z])/g, ' $1') // Add space before capital letters
            .replace(/^./, function (str) { return str.toUpperCase(); }); // Capitalize first letter
    };
    return (
        <div className="container mx-auto px-4 py-8 border-2 rounded-xl">
            <h2 className="text-3xl font-semibold mb-8 text-center">Proactive Heart Health: Precision Forecasting of Stroke Incidents</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Form inputs */}
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key}>
                        <label htmlFor={key} className="block mb-2 text-uppercase">{convertToTitle(key)}</label>
                        {renderInput(key, value, handleChange)}
                    </div>
                ))}
                {/* Submit button */}
                <div className="col-span-full">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        PREDICT
                    </button>
                </div>
            </form>
            {/* Prediction result */}
            {prediction && (
                <p className={`mt-4 text-center ${prediction[0] === 0 ? "text-green-600" : "text-red-600"}`}>
                    {prediction[0] === 0 ? "No apparent risk detected" : "Potential risk identified"}
                </p>
            )}
            {/* Error message */}
            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
        </div>
    );
}

// Function to render input based on key
function renderInput(key, value, handleChange) {
    if (key === 'sex') {
        return (
            <select
                name={key}
                value={value}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
            >
                <option value="">Select</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
            </select>
        );
    } else if (key === 'chestPainType') {
        return (
            <select
                name={key}
                value={value}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
            >
                <option value="">Select</option>
                <option value="1">No Pain</option>
                <option value="2">Normal Pain</option>
                <option value="3">Abnormal Pain</option>
                <option value="4">Severe Pain</option>
            </select>
        );
    } else if (key === 'fastingBloodSugar') {
        return (
            <select
                name={key}
                value={value}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
            >
                <option value="">Select</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
            </select>
        );
    } else if (key === 'restingECG') {
        return (
            <select
                name={key}
                value={value}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
            >
                <option value="">Select</option>
                <option value="0">Normal</option>
                <option value="1">Abnormal</option>
                <option value="2">Danger</option>
            </select>
        );
    } else if (key === 'exerciseInducedAngina') {
        return (
            <select
                name={key}
                value={value}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
            >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        );
    } else {
        return (
            <input
                type={key === 'age' ? 'number' : 'text'}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
            />
        );
    }
}

// Function to convert key to title case
function convertToTitle(title) {
    return title.charAt(0).toUpperCase() + title.slice(1).replace(/([A-Z])/g, ' $1');
}

export default PredictionForm;

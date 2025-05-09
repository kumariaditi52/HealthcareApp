import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles/DoctorSelection.css';

const DoctorSelection = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    //call here for selection the doctors with selceted location from the backend



    // Mock doctor data with string IDs to mimic MongoDB ObjectIds
    const doctors = [
        { id: '63f847f5e152fa29e074aa21', name: 'Dr. K.Suma', specialty: 'Obstetrics & Gynaecology', location: 'Hyderabad' },
        { id: '63f847f5e152fa29e074aa22', name: 'Dr. G.Keertana Reddy', specialty: 'Obstetrics & Gynaecology', location: 'Hyderabad' },
        { id: '63f847f5e152fa29e074aa23', name: 'Dr. Roopa Ghanta', specialty: 'Obstetrics & Gynaecology', location: 'Hyderabad' },
        { id: '63f847f5e152fa29e074aa24', name: 'Dr. Anupama', specialty: 'Orthopedic', location: 'Hyderabad' },
        { id: '63f847f5e152fa29e074aa25', name: 'Dr. Padmavati Kapila', specialty: 'Pediatrician', location: 'Hyderabad' },
        { id: '63f847f5e152fa29e074aa26', name: 'Dr. Sreelatha Jella', specialty: 'Psychiatrist', location: 'Bangalore' },
        { id: '63f847f5e152fa29e074aa27', name: 'Dr. Archana Agarwal', specialty: 'Cardiologist', location: 'Bangalore' },
        { id: '63f847f5e152fa29e074aa28', name: 'Dr. Rashmi Swaroop', specialty: 'Orthopedic', location: 'Bangalore' },
        { id: '63f847f5e152fa29e074aa29', name: 'Dr. Rashmi Vasanth', specialty: 'Psychiatrist', location: 'Bangalore' },
        { id: '63f847f5e152fa29e074aa2a', name: 'Dr. M.Gowri', specialty: 'Obstetrics & Gynaecology', location: 'Bangalore' },
        { id: '63f847f5e152fa29e074aa2b', name: 'Dr. Triveni M P', specialty: 'Cardiologist', location: 'Chennai' },
        { id: '63f847f5e152fa29e074aa2c', name: 'Dr. Harini P Shetty', specialty: 'Dentist', location: 'Chennai' },
        { id: '63f847f5e152fa29e074aa2d', name: 'Dr. Bhargavi Reddy', specialty: 'Pediatrician', location: 'Chennai' },
        { id: '63f847f5e152fa29e074aa2e', name: 'Dr. Anilasre Atluri', specialty: 'Dermatologist', location: 'Chennai' },
        { id: '63f847f5e152fa29e074aa2f', name: 'Dr. S.Samundi Sankari', specialty: 'Psychiatrist', location: 'Chennai' },
        // Add other doctors...
    ];

    const [specialtyFilter, setSpecialtyFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');

    const handleSelectDoctor = (doctor) => {
        // Redirect to appointment booking page with doctor's ID
        navigate(`/appointment/${doctor.id}`, { state: { doctor } });
    };

    const filteredDoctors = doctors.filter((doctor) =>
        (specialtyFilter ? doctor.specialty.toLowerCase().includes(specialtyFilter.toLowerCase()) : true) &&
        (locationFilter ? doctor.location.toLowerCase().includes(locationFilter.toLowerCase()) : true)
    );


    return (
        <div className="doctor-selection-container">
            <h2>Select a Doctor</h2>
            <div className="filter-container">
                <input
                    type="text"
                    placeholder="Filter by Specialty"
                    value={specialtyFilter}
                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                    className="filter-input"
                />
                <input
                    type="text"
                    placeholder="Filter by Location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="filter-input"
                />
            </div>
            <ul className="doctor-list">
                {filteredDoctors.map((doctor) => (
                    <li key={doctor.id} className="doctor-item">
                        <div className="doctor-info">
                            <span className="doctor-name">{doctor.name}</span>
                            <span className="doctor-specialty">{doctor.specialty}</span>
                            <span className="doctor-location">{doctor.location}</span>
                            <button onClick={() => handleSelectDoctor(doctor)} className="select-button">
                                Select
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {filteredDoctors.length === 0 && <p>No doctors found for the selected criteria.</p>}
        </div>
    );
};

export default DoctorSelection;






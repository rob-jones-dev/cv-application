import { useState } from 'react'
import Cv from './cv.jsx'

export default function Form() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    degree: '',
    graduation: '',
    company: '',
    position: '',
    duration: ''
    })

    const dummyData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567',
    school: 'State University',
    degree: 'Yes, degree',
    graduation: '2024-05-30',
    company: 'The Company',
    position: 'Point Guard',
    duration: '7 Yalms'
    }

    const clearData = {
    name: '',
    email: '',
    phone: '',
    school: '',
    degree: '',
    graduation: '',
    company: '',
    position: '',
    duration: ''
    }


    const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }))
    }

    const [runData, setRunData] = useState({})

  return (
    <>
        <form>
            <button type="button" onClick={() => setFormData(dummyData)}>Fill with dummy data</button>
            <button type="button" onClick={() => setFormData(clearData)}>Clear form</button>
            <section>
                <h1>Personal Information</h1>
                <label htmlFor="name">Name</label>
                <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" />
                <label htmlFor="phone">Phone</label>
                <input value={formData.phone} onChange={handleChange} type="tel" id="phone" name="phone" />
            </section>
            <section>
                <h1>Education</h1>
                <label htmlFor="school">School</label>
                <input value={formData.school} onChange={handleChange} type="text" id="school" name="school" />
                <label htmlFor="degree">Degree</label>
                <input value={formData.degree} onChange={handleChange} type="text" id="degree" name="degree" />
                <label htmlFor="graduation">Graduation Date</label>
                <input value={formData.graduation} onChange={handleChange} type="date" id="graduation" name="graduation" />
            </section>
            <section>
                <h1>Experience</h1>
                <label htmlFor="company">Company</label>
                <input value={formData.company} onChange={handleChange} type="text" id="company" name="company" />
                <label htmlFor="position">Position</label>
                <input value={formData.position} onChange={handleChange} type="text" id="position" name="position" />
                <label htmlFor="duration">Duration</label>
                <input value={formData.duration} onChange={handleChange} type="text" id="duration" name="duration" />
            </section>
            <section>
                <button type="button" onClick={() => setRunData(formData)}>Generate!</button>
            </section>
        </form>
        <Cv formData={runData} />
    </>
  )
}
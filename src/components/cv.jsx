export default function Cv({ formData }) {
  return (
    <div>
        <h1>CV</h1>
        <h2>{formData.name}</h2>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>School: {formData.school}</p>
        <p>Degree: {formData.degree}</p>
        <p>Graduation Date: {formData.graduation}</p>
        <p>Company: {formData.company}</p>
        <p>Position: {formData.position}</p>
        <p>Duration: {formData.duration}</p>
    </div>
  )
}
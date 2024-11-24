import { useParams } from "react-router-dom";

export default function ApplyPage() {
  
  const { jobId } = useParams();

  return (
    <div>
      <h1>Apply for Job #{jobId}</h1>
      <form>
        {/* Application form fields */}
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}


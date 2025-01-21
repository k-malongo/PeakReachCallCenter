// import { useParams } from "react-router-dom";

import { useState } from "react";

export default function JobAdvertisement() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleApplyClick = (jobId) => {
    // Replace with the actual URL or dynamic routing logic
    console.log(jobId)
    window.location.href = `/careers/apply/${jobId}`;
  };

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      location: "Remote",
      description:
        "Develop and maintain web applications using React and Node.js.",
    },
    {
      id: 2,
      title: "Cloud Support Engineer",
      location: "Nairobi, Kenya",
      description:
        "Provide technical support for cloud infrastructure and ensure high availability.",
    },
    {
      id: 3,
      title: "Cloud Support Engineer",
      location: "Nairobi, Kenya",
      description:
        "Provide technical support for cloud infrastructure and ensure high availability.",
    },
    {
      id: 3,
      title: "NOC Engineer",
      location: "Nairobi, Kenya",
      description:
        "Provide technical support for network infrastructure to ensure high availability and reliability.",
    },
    {
      id: 3,
      title: "Call Center Agent",
      location: "Nairobi, Kenya",
      description:
        "Provide customer support and answer any inquiries as requested.",
    },
    {
      id: 3,
      title: "Team Lead",
      location: "Nairobi, Kenya",
      description:
        "Provide support to the junior staff including continuos training",
    },
  ];

  return (
    <div className="job-container">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => setActiveTab("tab1")}
        >
          Available Jobs
        </button>
        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => setActiveTab("tab2")}
        >
          How to Apply
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "tab1" && (
          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.title}</h3>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>{job.description}</p>
                <button
                  className="apply-button"
                  onClick={() => handleApplyClick(job.id)}
                >
                  Apply Now
                </button>{" "}
              </div>
            ))}
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="how-to-apply">
            <h3>How to Apply</h3>
            <p>
              To apply for a position, click on the "Apply Now" button next to
              the job listing and follow the instructions on the application
              page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

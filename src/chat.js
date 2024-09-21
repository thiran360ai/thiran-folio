import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chat.css"; // Import the CSS file

const Chat = ({ closeChat }) => {
  const [step, setStep] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { type: "ai", text: "I am happy to welcome you to Thiran360AI as a Thiran Assistant." },
    { type: "ai", text: "What can I call you?" },
  ]);
  const [userResponse, setUserResponse] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [jsonData, setJsonData] = useState({});
  const [file, setFile] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false);
  const [showRoleOptions, setShowRoleOptions] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  const chatBoxRef = useRef(null);

  const updateJsonData = (key, value) => {
    setJsonData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleNextStep = () => {
    switch (step) {
      case 0:
        
        setName(userResponse);
        updateJsonData("name", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          {
            type: "ai",
            text: `Nice to meet you, ${userResponse}. Are you in need of software, or are you seeking for a job?`,
            roleOptions: true,
          },
        ]);
        setUserResponse("");
        setStep(1);
        break;
  
      case 1:
        if (role) {
          updateJsonData("role", role);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "user", text: role },
            {
              type: "ai",
              text: role === "I'm seeking for a job"
                ? "Kindly share your resume with us."
                : "If you have any relevant files, please upload them.",
            },
          ]);
          setStep(role === "I'm seeking for a job" ? 2 : 9); // Step 2 for job seekers, Step 9 for clients
          setShowRoleOptions(false);
        }
        break;
  
      // Job Seeker: Step 2 - Resume Upload
      case 2:
        if (file) {
          updateJsonData("resume", file.name);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "user", text: file.name },
            { type: "ai", text: "Can you give us a quick introduction about who you are?" }, // Ask for self-introduction
          ]);
          setUserResponse("");
          setStep(7); // Move to introduction step (Step 7 for job seekers)
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "ai", text: "Please upload a resume to proceed." },
          ]);
        }
        break;
  
      // Client: Step 9 - Document Upload
      case 9:
        if (file) {
          updateJsonData("documentUpload", file.name);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "user", text: file.name },
            { type: "ai", text: "Tell us more about your company." }, // Ask for company description
          ]);
          setUserResponse("");
          setStep(4); // Move to company description step (Step 4 for clients)
        } else {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "ai", text: "Please upload the required documents to proceed." },
          ]);
        }
        break;
  
      // Job Seeker: Step 7 - Self-introduction
      case 7:
        updateJsonData("selfIntroduction", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "What are your areas of expertise?" }, // Continue to ask for skills
        ]);
        setUserResponse("");
        setStep(6); // Move to skills step
        break;
  
      // Client: Step 4 - Company Description
      case 4:
        updateJsonData("companyDescription", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Kindly provide the link to your company’s website or social channels." }, // Ask for website or social media URL
        ]);
        setUserResponse("");
        setStep(5); // Move to company website step
        break;
  
      case 5:
        // Company website or social media URL step (for clients)
        if (userResponse.trim() !== "") {
          updateJsonData("companyWebsite", userResponse);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "user", text: userResponse },
            { type: "ai", text: "TWhat is the timeline for this project?" },  // Final response
          ]);
          setUserResponse("");  // Clear input
          setStep(10);  // Move to thank you or final step
        }
        break;
  
      case 6:
        updateJsonData("skills", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Could you share your professional goals with us?" },
        ]);
        setUserResponse("");
        setStep(8); // Ask for career goals
        break;
  
      case 8:
        updateJsonData("careerGoals", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Are you willing to relocate for employment?" },
        ]);
        setUserResponse("");
        setStep(10); // Move to final step
        break;
  
      case 10:
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
          closeChat(); // Automatically close the chat after thank you
        }, 3000); // 3 seconds delay
        break;
  
      default:
        break;
    }
  };
  

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    handleNextStep();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Capture the selected file
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && step !== 4 && step !== 9) {
      handleNextStep();
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-modal">
      {showThankYou ? (
        <div className="thank-you-card">
          <div className="thank-you-message">
            <span>Thank you for chatting with us! We will be in touch soon.</span>
          </div>
        </div>
      ) : (
        <>
          <div className="chat-header">
            <div className="chat-logo">
              <img src="https://t4.ftcdn.net/jpg/05/88/95/25/240_F_588952520_7AzwyRgAF2EqyWxDbDbGmM0ssPwgrogb.jpg" alt="Chat Logo" />
              <span className="chat-title">Chat with Thiran Assistant</span>
            </div>
            <button className="close-button" onClick={closeChat}>
              &times;
            </button>
          </div>
          <div id="chat-box" className="chat-box" ref={chatBoxRef}>
            {chatMessages.map((message, index) => (
              <div key={index} className={`chat-message ${message.type}`}>
                <span>{message.text}</span>
                {message.roleOptions && showRoleOptions && (
                  <div className="role-options">
                    <button className="btn btn-primary" onClick={() => handleRoleSelect("I need software")}>
                      I need software
                    </button>
                    <button className="btn btn-secondary ms-2" onClick={() => handleRoleSelect("I'm seeking for a job")}>
                      I'm seeking for a job
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* File upload input for steps 2 (job seekers) and 9 (clients) */}
          {(step === 2 || step === 9) && (
            <div className="chat-message user file-upload-input d-flex justify-content-end align-items-center">
              <div className="file-upload-container" style={{ maxWidth: "250px" }}>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleFileChange}
                  style={{ width: "100%", padding: "5px", fontSize: "14px" }}
                />
                <button
                  className="btn btn-primary btn-sm mt-2"
                  style={{ width: "100%", fontSize: "14px" }}
                  onClick={handleNextStep}
                >
                  Upload and Continue
                </button>
              </div>
            </div>
          )}

          {/* Text input for other steps */}
          {step !== 2 && step !== 9 && (
            <div className="input-container">
              <textarea
                type="text"
                className="form-control"
                placeholder="Type your message here..."
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="btn btn-primary" onClick={handleNextStep}>
                Send
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Chat;

"use client";
import React, { useEffect, useMemo, useState } from "react";
import useAnimationEffects from "../Util/upAnimation";
import NewButton from "../ui/NewButton";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const options = useMemo(
    () => ({
      upSelector: ".contactForm",
      defaultUpAnimation: { opacity: 0, y: 70 },
      defaultUpTo: { opacity: 1, y: 0, scale: 1, duration: 0.5 },
    }),
    []
  );

  useAnimationEffects(options);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStatus("");
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [status]);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("https://wahdkarak.com/sendEmail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("Your message has been sent!");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
      setEmail("");
      setMessage("");
      setName("");
      setSubject("");
    } catch (error) {
      setStatus("Network error. Please try again.");
    }
  };
  return (
    <div>
      <div className="py-20">
        <div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-5">
              <FormInput
                name={"name"}
                lable={"YOUR NAME"}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <FormInput
                name={"email"}
                lable={"EMAIL"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <FormInput
                name={"contact"}
                lable={"CONTACT NO"}
                onChange={(e) => setContactNo(e.target.value)}
                value={contactNo}
              />
              <FormInput
                name={"Subject"}
                lable={"SUBJECT"}
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>

            <div className="relative contactForm">
              <textarea
                type="text"
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="TELL US ABOUT YOUR PROJECT"
                className="w-full py-3 px-3 tracking-wider placeholder:text-neutral-400 focus:border-neutral-900 focus:placeholder:text-neutral-300 focus:outline-none border-b text-black placeholder:text-sm  placeholder:font-medium mt-1 focus:ring-0 "
              />
            </div>
          </div>

          <div className="mt-2">
            <p
              className={`text-sm contactForm ${
                status === "Your message has been sent!"
                  ? "text-main-color-600"
                  : "text-red-600"
                }`}
            >
              {status}
            </p>

            <div className="mt-5 contactForm">
              <NewButton onClick={handleSubmit}>SEND MESSAGE</NewButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

const FormInput = ({ name, value, lable, onChange, type }) => {
  return (
    <div className=" contactForm">
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={lable}
        autoComplete="off"
        className="w-full py-3 px-3 focus:outline-none tracking-wider focus:border-neutral-900 focus:placeholder:text-neutral-300 transition-all duration-300 border-b text-black placeholder:text-sm  placeholder:font-medium mt-1 focus:ring-0 placeholder:text-neutral-400 "
      />
    </div>
  );
};

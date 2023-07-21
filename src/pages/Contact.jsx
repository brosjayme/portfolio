import React, { useRef } from "react";
import NavBar from "../Components/Navbar";
// import SocialLinks from '../Components/SocialLinks';
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bbg6oui",
        "template_vm445e4",
        e.target,
        "mVDiOfpW5fQu4iGI9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <NavBar />
      {/* <SocialLinks/> */}
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-1 bg-gradient-to-b from-black via-black to-gray-800"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col max-w-[450px] w-full"
        >
          <div className="pb-4">
            <p className="text-3xl font-bold inline border-b-2 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-1">
              {" "}
              Please fill the form below or shoot me an email -
              okorojohn.ag@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-1"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="my-2 p-1 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="bg-[#ccd6f6] p-1"
            name="message"
            rows="4"
            placeholder="Message"
            required
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactUs;

// coverletter
// Dear Hiring Manager,
// I am writing to express my interest in the Frontend Remote internship position with your company.
// With my experience in HTML, CSS and JavaScript, I am confident that I would make a great fit for this role.
// Here are some documents that showcase my skills and experience:
//       Portfolio: I have a portfolio website that showcases my frontend development projects it includes websites I have built using HTML, CSS and JavaScript, along with examples of my design and development work. You can view my portfolio at https://okorojohnportfolio.netlify.app.
//    Resume: I have attached my resume to this form, Which outlines my experience, character and education background in computer science.
// Thank you for considering my application. I am excited about the opportunity to contribute my skills and gain more experience from your team. please let me know if you require any additional information or have any questions.
// Sincerely,
// Okoro John
//

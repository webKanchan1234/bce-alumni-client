import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import {
  successToast,
  errorToast,
} from "../../utils/toast";

const Contact = () => {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      // await submitContact(formData);

      successToast(
        "Message sent successfully 🎉"
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {

      errorToast(
        "Failed to send message"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact BCE Alumni
        </title>
      </Helmet>

      <div className="bg-slate-50 min-h-screen">

        {/* Hero */}

        <section
          className="
          relative
          h-[420px]
          flex
          items-center
          justify-center
          text-center
          text-white
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-950/75" />

          <div className="relative z-10 px-6">

            <h1 className="text-6xl font-extrabold">
              Get In Touch
            </h1>

            <p className="mt-6 text-xl max-w-4xl">
              Have questions about the
              association, upcoming events,
              or membership? Our team is
              here to support the global
              BCE community.
            </p>

          </div>

        </section>

        {/* Contact Section */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left */}

            <div>

              <span
                className="
                bg-yellow-100
                text-yellow-700
                px-5
                py-2
                rounded-full
                font-semibold
                "
              >
                CONTACT DETAILS
              </span>

              <h2
                className="
                text-6xl
                font-extrabold
                mt-8
                text-slate-900
                "
              >
                We're here to help
              </h2>

              <p
                className="
                text-xl
                text-gray-500
                mt-8
                leading-10
                "
              >
                Whether you want to rejoin
                the community, report an
                update to your profile,
                suggest an event, or simply
                say hello — we are always
                listening.
              </p>

              <div className="space-y-10 mt-16">

                <div className="flex gap-6">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-yellow-50
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <FaEnvelope
                      className="
                      text-yellow-500
                      text-xl
                      "
                    />
                  </div>

                  <div>

                    <h3 className="font-bold text-3xl">
                      Official Email
                    </h3>

                    <p
                      className="
                      text-xl
                      mt-2
                      font-semibold
                      "
                    >
                      alumni@bcebhagalpur.ac.in
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-yellow-50
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <FaMapMarkerAlt
                      className="
                      text-yellow-500
                      text-xl
                      "
                    />
                  </div>

                  <div>

                    <h3 className="font-bold text-3xl">
                      Association Address
                    </h3>

                    <p
                      className="
                      text-xl
                      text-gray-600
                      mt-2
                      leading-9
                      "
                    >
                      BCE Alumni Welfare
                      Association
                      <br />
                      Bhagalpur College of
                      Engineering
                      <br />
                      Bhagalpur, Bihar
                      813210, India
                    </p>

                  </div>

                </div>

                <div className="flex gap-6">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-yellow-50
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <FaClock
                      className="
                      text-yellow-500
                      text-xl
                      "
                    />
                  </div>

                  <div>

                    <h3 className="font-bold text-3xl">
                      Working Hours
                    </h3>

                    <p
                      className="
                      text-xl
                      text-gray-600
                      mt-2
                      "
                    >
                      Monday – Friday
                      <br />
                      10:00 AM – 5:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Form */}

            <div
              className="
              bg-white
              rounded-[40px]
              p-10
              shadow-lg
              "
            >

              <h2 className="text-5xl font-bold">
                Send a Message
              </h2>

              <p
                className="
                text-gray-500
                mt-4
                text-lg
                "
              >
                We'll get back to you
                within 48 business hours.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >

                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="
                    border
                    rounded-2xl
                    p-5
                    "
                    required
                  />

                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="
                    border
                    rounded-2xl
                    p-5
                    "
                    required
                  />

                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                  w-full
                  border
                  rounded-2xl
                  p-5
                  "
                  required
                />

                <input
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="
                  w-full
                  border
                  rounded-2xl
                  p-5
                  "
                  required
                />

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Detailed Inquiry"
                  value={formData.message}
                  onChange={handleChange}
                  className="
                  w-full
                  border
                  rounded-2xl
                  p-5
                  resize-none
                  "
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                  w-full
                  bg-yellow-400
                  hover:bg-yellow-500
                  text-black
                  font-bold
                  py-5
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  gap-3
                  "
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Request"}

                  <FaPaperPlane />
                </button>

              </form>

            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default Contact;
import React from "react";
import NavBar from "../../components/Navbar";

const TermsAndConditions = () => {
  return (
    <>
      <div className="bg-white  min-h-screen p-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold mb-5">Terms and Conditions</h1>
          <section className="mb-5">
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              Welcome to Bihe.com, a matrimonial site designed to help
              individuals find their life partners. By using this site, you
              agree to abide by the following terms and conditions.
            </p>
          </section>
          <section className="mb-5">
            <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
            <p>
              You must be at least 18 years old to register on Bihe.com. By
              registering or using our services, you confirm that you meet this
              age requirement.
            </p>
          </section>
          <section className="mb-5">
            <h2 className="text-2xl font-semibold mb-3">
              3. User Responsibilities
            </h2>
            <p>
              As a user of Bihe.com, you are responsible for providing accurate
              and truthful information in your profile. You must not impersonate
              others or create false profiles.
            </p>
            <p>
              You agree not to engage in any unlawful, offensive, or harmful
              behavior while using our platform. This includes harassment,
              discrimination, or any other inappropriate conduct.
            </p>
          </section>
          <section className="mb-5">
            <h2 className="text-2xl font-semibold mb-3">
              4. Privacy and Data Security
            </h2>
            <p>
              We take privacy and data security seriously. Please review our
              Privacy Policy to understand how we collect, use, and protect your
              personal information.
            </p>
          </section>
          {/* Add more sections for other terms and conditions */}
          <section className="mb-5">
            <h2 className="text-2xl font-semibold mb-3">5. User Conduct</h2>
            <p>
              Users are expected to maintain a respectful and courteous demeanor
              while using the platform. Abusive or inappropriate behavior will
              not be tolerated.
            </p>
          </section>
          <section className="mb-5">
            <h2 className="text-2xl font-semibold mb-3">
              6. Termination of Accounts
            </h2>
            <p>
              Bihe.com reserves the right to terminate user accounts in cases of
              violation of these terms and conditions.
            </p>
          </section>
        </div>
        <footer className="text-center ml-[-20px] w-[100vw] py-5  bg-gray-200 mt-11 mb-[-20px]">
          &copy; {new Date().getFullYear()} Bihe.com. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default TermsAndConditions;

import simple from "../../../../public/phone.png";
import "../../../App.css";

const First = () => {
  return (
    <div className="fourth mb-1 mt-4">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-6/12 mb-8 lg:mb-0">
            <p className="text-center text-2xl mb-4 font-bold">Simple Guide</p>
            <div className="accordion ml-20">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Getting Started
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Discover how Bihe.com operates and get started on your
                      journey to finding a life partner. The vast amount of
                      verified registrations increases your chances of finding
                      the perfect match.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Creation of true and genuine self profile
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Learn the importance of creating a genuine and true
                      self-profile. A well-crafted profile enhances your chances
                      of making meaningful connections on Bihe.com.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Organized Search
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Understand how Bihe.com facilitates the organized search
                      for your perfect match. A systematic approach ensures you
                      can find and connect with potential life partners more
                      efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Heartwarming Connections
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Read heartwarming stories of successful connections made
                      on Bihe.com, highlighting the platform's role in bringing
                      people together for a lifetime of happiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/12 text-center mx-auto">
            <img
              className="w-64 lg:w-full mx-auto"
              src={simple}
              alt="fourth_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
